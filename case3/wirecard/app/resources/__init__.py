from .payments import ns as payments_ns
from ..utils import PatchedApi

api = PatchedApi()

api.add_namespace(payments_ns)
