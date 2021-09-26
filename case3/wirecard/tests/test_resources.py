from flask.testing import FlaskClient


def test_payment_status(client: FlaskClient):
    res = client.get('/payments/payment')
    assert res.ok
    assert res.json == {'status': 'PROCESSING'}

def test_create_boleto_payment(client: FlaskClient):
    res = client.post('/payments/payment', data=dict(
        
    ))
    assert res.ok
    assert res.json == {'status': 'PROCESSING'}
