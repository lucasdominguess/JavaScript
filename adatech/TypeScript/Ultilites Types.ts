//ultility types : Usado para criar novos tipos "Person" a partir de tipos ja existentes

//1. Partial |  todos os parametros sao opcionais

type PersonPartial = Partial<person> ; 

//2 . Required | todos os parametros sao obrigatorios
type PersonRequired = Required<person>

//3. Pick  |pegando somente alguns parametros
type Personpicked = Pick<person, 'nome' | 'idade' > 

//4. Omit | Omitindo algum parametro
type PersonOmit = Omit<person , 'profisao'> 

//5. exclude | excluindo algum parametro
type criterioexcluide = Exclude<criterio ,'greater'>