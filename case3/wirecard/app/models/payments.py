import enum
from sqlalchemy import Column, DateTime, func, Integer, String, Float, Enum, ForeignKey

from .base import Base, db

class PaymentTypes(enum.Enum):
    CREDIT_CARD = 1
    BOLETO = 2

class PaymentStatus(enum.Enum):
    PROCESSING = 1
    APPROVED = 2
    DENIED = 3

class Client(Base):
    pass

class Buyer(Base):
    name = Column(String(255), nullable=False)
    email = Column(String(120), nullable=False)
    cpf = Column(String(11), nullable=False)

class Card(Base):
    holder_name = Column(String(255), nullable=False) 
    number = Column(String(255), nullable=False) 
    expiration_date = Column(DateTime, nullable=False) 
    cvv = Column(String(3), nullable=False) 

class Payment(Base):
    amount = Column(Float(), nullable=False)
    type = Column(Enum(PaymentTypes), nullable=False)
    status = Column(Enum(PaymentStatus), default=PaymentStatus.PROCESSING)
    card_id = Column(Integer, ForeignKey('card.id'))
