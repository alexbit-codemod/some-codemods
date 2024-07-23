# Note: importing from ORJSONResponse
from src.json_encoding import ORJSONResponse

def default(o: object) -> object:
    if isinstance(o, Money):
        return {"amount": o.amount, "currency": o.currency.value}
    
class ORJSONResponse(ORJSONResponse):  # Note: Inheriting from ORJSONResponse
    def render(self, content: object) -> bytes:
        return orjson.dumps(
            content,
            default=default,
            option=orjson.OPT_PASSTHROUGH_DATETIME
                   | orjson.OPT_NON_STR_KEYS
                   | orjson.OPT_SERIALIZE_NUMPY,
        )