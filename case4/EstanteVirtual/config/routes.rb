Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      resources :competicao
      resources :resultado
    end
  end
end
