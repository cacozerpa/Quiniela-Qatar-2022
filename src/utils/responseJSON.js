function responseJSON(status, data, error){
    if(status){

        const json =  {
            status: status,
            data: data,
            date: Date()
        }

        error ? json.error = error : " "

        return json;

    }else{
        return 'Status Missing!'
    }
}

module.exports = responseJSON;