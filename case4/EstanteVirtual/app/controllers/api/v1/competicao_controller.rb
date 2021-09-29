module Api
	module V1
		class CompeticaoController < ApplicationController
            # exibir ranking
            def index
                resultados = Resultado.joins(:competicao).where('competicao.nome' => params[:competicao]).order('value DESC')
                render json: resultados.collect do | res |
                    {  
                        competicao: res.competicao.nome, 
                        atleta: res.atleta, 
                        value: res.value, 
                        unidade: res.unidade
                    }
                end
            end   
            def create
                competicao = Competicao.new(competicao_params)
				if competicao.save
					render json: {status: 'SUCCESS', message:'competicao salva', data:competicao},status: :ok
				else
					render json: {status: 'ERROR', message:'competicao nao salva', data:competicao.errors},status: :unprocessable_entity
				end
            end
            def update
                
            end
            private
            def competicao_params
                params.permit(:nome, :esporte, :done)
            end
		end
        class ResultadoController < ApplicationController
            def index
            end
            def create
                resultado = Resultado.new({
                    competicao: Competicao.filter(name: resultado_params['competicao']),
                    atleta: resultado_params['atleta'],
                    value: resultado_params['value'],
                    unidade: resultado_params['unidade'],
                })
                if resultado.save
                    render json: {status: 'SUCCESS', message:'resultado salvo', data:resultado},status: :ok
                else
                    render json: {status: 'ERROR', message:'resultado nao salvo', data:resultado.errors},status: :unprocessable_entity
				end
            end
            private
            def resultado_params
                params.permit(:competicao, :atleta, :value, :unidade)
            end
        end
	end
end