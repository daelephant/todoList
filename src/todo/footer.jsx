import '../assets/styles/footer.styl'
export default{
    data(){
        return{
            author: 'Len'
        }
    },
    render(){
        return(
            <div id="footer">
                <span>Power by Jokcy. written by {this.author} </span>
                <br/>
                <a href="https://github.com/daelephant" target="_blank">
                    To Github
                </a>
            </div>
        )
    }
}
