from pathlib import Path
import json
from pypdf import PdfReader
root=Path('courses')
manifest=[]
for path in sorted(root.rglob('*')):
    if path.suffix not in ['.pdf','.ipynb'] or 'submission_ready' in str(path) or path.name=='example.ipynb': continue
    entry={'path':str(path),'pages':0}
    try:
        if path.suffix=='.pdf':
            reader=PdfReader(path)
            pages=[f'\n--- PAGE {i+1} ---\n'+(p.extract_text() or '') for i,p in enumerate(reader.pages)]
            entry['pages']=len(pages)
            text='\n'.join(pages)
        else:
            data=json.loads(path.read_text())
            text='\n'.join(f'\n--- CELL {i+1} ({c["cell_type"]}) ---\n'+''.join(c['source']) for i,c in enumerate(data['cells']) if c['cell_type']=='markdown')
        out=Path('tmp/pdfs')/(str(path).replace('/','__')+'.txt')
        out.write_text(text)
        entry.update(extracted=str(out),characters=len(text))
    except Exception as e:entry['error']=str(e)
    manifest.append(entry)
Path('tmp/pdfs/manifest.json').write_text(json.dumps(manifest,indent=2))
print(json.dumps(manifest,indent=2))
