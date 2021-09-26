from datetime import date
from app.models import Payment, PaymentTypes, Card, PaymentStatus
from app.models.datastore import PaymentDatastore


def test_create_boleto_payment(db):
    datastore = PaymentDatastore(db)
    datastore.create_boleto_payment(amount=10)

    payment = db.session.query(Payment).filter_by(amount=10).first()
    assert payment.amount == 10
    assert payment.type == PaymentTypes.BOLETO


def test_create_boleto_payment(db):
    datastore = PaymentDatastore(db)
    datastore.create_credit_payment(amount=20, card_holder='BRUNA BARLACH', card_number='1234.1234.1234.1234', 
        card_expiration=date(2027, 10, 10), card_cvv='123')

    payment = db.session.query(Payment).filter_by(amount=20).first()
    assert payment.amount == 20
    assert payment.type == PaymentTypes.CREDIT_CARD
    assert payment.status == PaymentStatus.PROCESSING

    card = db.session.query(Card).filter_by(holder_name='BRUNA BARLACH').first()
    assert card.number == '1234.1234.1234.1234'