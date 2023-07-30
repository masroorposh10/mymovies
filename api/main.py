from fastapi import FastAPI,HTTPException
from fastapi.middleware.cors import CORSMiddleware
from data import data
app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Adjust this based on your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get("/data")
def get_data():
    return data

@app.get("/data/{id}")
def get_data_id(id: int):
    for item in data:
        if item["id"] == id:
            return item
    raise HTTPException(status_code=404, detail="Item not found")
@app.post("/data/add")
def add_data(item: dict):
    item["id"] = max(item["id"] for item in data) + 1
    data.append(item)
    return item

@app.delete("/data/{key}")
def delete_data(key: str):
    if key in data:
        del data[key]
        return {"message": "Data deleted successfully"}
    else:
        return {"message": "Key not found"}