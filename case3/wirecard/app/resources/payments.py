from datetime import date

from flask import request
from flask_restplus import Namespace, Resource, fields

from app.models.database import db
from app.models.datastore import PaymentDatastore


ns = Namespace('payments', description='Payments')



success_model = ns.model('Success', {
    'message': fields.String
})


payment_status_model = ns.model('Payment', {
    'status': fields.String
})


@ns.route('/', endpoint='payments')
class Payments(Resource):
    @ns.marshal_with(success_model)
    def post(self):
        """
        Create payment
        """
        datastore = PaymentDatastore(db)
        if request.args['type'] == 'boleto':
            datastore.create_boleto_payment(amount=request.json['amount'])
        elif request.args['type'] == 'cc':
            expiration = date.fromisoformat(request.json['card_expiration'])
            datastore.create_credit_payment(
                amount=request.json['amount'], card_holder=request.json['card_holder'], 
                card_number=request.json['card_number'], card_expiration=expiration, 
                card_cvv=request.json['card_cvv'])
        return {'message': 'Success'}


@ns.route('/<int:id>', endpoint='payment')
class Payment(Resource):

    @ns.marshal_with(payment_status_model)
    def get(self, id):
        """
        Get payment status
        """
        return {'status': 'PROCESSING'}

