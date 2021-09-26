from flask_restplus import Namespace, Resource, fields

from app.models.datastore import PaymentDatastore

ns = Namespace('payments', description='Payments')

success_model = ns.model('Success', {
    'message': fields.String
})


payment_status_model = ns.model('Payment', {
    'status': fields.String
})



@ns.route('/payment', endpoint='payment')
class Payment(Resource):

    @ns.marshal_with(payment_status_model)
    def get(self):
        """
        Get payment status
        """
        return {'status': 'PROCESSING'}

    @ns.marshal_with(success_model)
    def post(self):
        """
        Create payment
        """
        return {'message': 'Success'}

