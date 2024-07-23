# Note: importing from ORJSONResponse
from src.json_encoding import ORJSONResponse
from typing import Callable

# Note: Usage of ORJSONResponse
def process_response(response_generator: Callable[[], ORJSONResponse]) -> ORJSONResponse:
    response = response_generator()
    return response

# Note: Usage of ORJSONResponse
def generate_response() -> ORJSONResponse:
    data = {"message": "Hello, world!"}
    return ORJSONResponse(content=data)

processed_response = process_response(generate_response)