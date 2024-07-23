from fastapi.responses import JSONResponse
from typing import Callable, Dict, Any

# Function that takes a callable returning JSONResponse
def process_response(response_generator: Callable[[], JSONResponse]) -> JSONResponse:
    response = response_generator()
    # Further processing with response
    return response

# Example usage
def generate_response() -> JSONResponse:
    data = {"message": "Hello, world!"}
    return JSONResponse(content=data)

# Processing the generated response
processed_response = process_response(generate_response)