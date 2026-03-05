# kinueng.github.io

Personal website hosted on GitHub Pages.

## Local Development

Run with Docker (live reload — no rebuild needed):

```bash
docker run -d --name kinueng-site -p 8080:80 -v $(pwd):/usr/share/nginx/html:ro nginx:alpine
```

Then open [http://localhost:8080](http://localhost:8080) in your browser. Any file changes are reflected on refresh.
