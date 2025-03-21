export const helpHttp=()=> {

    const customFetch=(endpoint,options)=>{
        const defaultHeader={
            accept:"application/json"
        }

        const controller=new AbortController()
        options.signal=controller.signal
        options.headers=options.headers
                        ?{...defaultHeader,...options.headers}
                        :defaultHeader
        
        options.body=JSON.stringify(options.body) || false

        if(!options.body) delete options.body

        setTimeout(()=>controller.abort(),3000)

        return fetch(endpoint,options)
               .then(resp=>resp.ok
                           ?resp.json()
                           :Promise.reject({
                                error:true,
                                status:resp.status||"00",
                                statusText:resp.statusText|| "Ocurrio un error"
                            })
                ).catch(error=>error)
    }

    const get=(url,options={})=>{
        return customFetch(url,options)
    }

    const post=(url,options={})=>{
        options.method="POST"
        return customFetch(url,options)
    }

    const put=(url,options={})=>{
        options.method="PUT"
        return customFetch(url,options)
    }

    const del=(url,options={})=>{
        options.method="DELETE"
        return customFetch(url,options)
    }

    return {get,post,del,put}
}

