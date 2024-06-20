
export default function pesquisa(){
return(
    <div className="center">
        <h1>Pesquisar</h1>
        <div className="inputArea">
            <input 
                type="text"
                placeholder="Nova tarefa"
                value={tarefa}
                onChange={(e) => setTarefa(e.target.value)}
        />
    )
}