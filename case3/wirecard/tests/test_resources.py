from flask.testing import FlaskClient

from app.models import Payment, Card
from app.models.database import db

def test_payment_status(client: FlaskClient):
    res = client.get('/payments/42')
    assert res.ok
    assert res.json == {'status': 'PROCESSING'}


def test_create_boleto_payment(client: FlaskClient, db):
    res = client.post('/payments/?type=boleto', json=dict(
        amount=10
    ))
    assert res.ok
    payment = db.session.query(Payment).filter_by(amount=10).first()
    assert payment.amount == 10

def test_create_credit_card_payment(client: FlaskClient, db):
    res = client.post('/payments/?type=cc', json=dict(
        amount=20,
        card_holder='BRUNA BARLACH', 
        card_number='1234.1234.1234.1234', 
        card_expiration='2030-10-10', 
        card_cvv='123'
    ))
    assert res.ok
    card = db.session.query(Card).filter_by(holder_name='BRUNA BARLACH').first()
    assert card.number == '1234.1234.1234.1234'