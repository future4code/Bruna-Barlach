from abc import ABC

from .payments import Payment, PaymentTypes, Card


class Datastore(ABC):

    def __init__(self, _db=None, session=None):
        self.session = None
        if _db:
            self.session = _db.session
        else:
            self.session = session

class CardDatastore(Datastore):
    def save_card(self, card):
        self.session.add(card)
        self.session.commit()
    
    def create_card(self, card_holder, card_number, card_expiration, card_cvv):
        card = Card(holder_name=card_holder, number=card_number, expiration_date=card_expiration, cvv=card_cvv)
        self.save_card(card)
        return card

class PaymentDatastore(Datastore):

    def save_payment(self, payment):
        self.session.add(payment)
        self.session.commit()

    def create_boleto_payment(self, amount):
        payment = Payment(amount=amount, type=PaymentTypes.BOLETO)
        self.save_payment(payment)
        return payment

    def create_credit_payment(self, amount, card_holder, card_number, card_expiration, card_cvv):
        card = CardDatastore(session=self.session).create_card(card_holder=card_holder, card_number=card_number, 
            card_expiration=card_expiration, card_cvv=card_cvv)
        payment = Payment(amount=amount, type=PaymentTypes.CREDIT_CARD, card_id=card.id)
        self.save_payment(payment)
        return payment
