from fastapi import FastAPI, Response
import json

app = FastAPI()


@app.get("/scraping/kovorking/{page}/")
def kovorking(page):
    from data.kovorking import get_data
    is_success, data_or_reason = get_data(page)

    return Response(json.dumps(data_or_reason), 200 if is_success else 400)


if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='0.0.0.0', port=8000)
