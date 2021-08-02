function insert(num)
    {
        document.getElementById('result').value += num;
    };

function equals(num){
    let va = document.getElementById('result').value;
    if(va)
        {
            document.getElementById('result').value = eval(va);
        };
};

function rem(){
    let va = document.getElementById('result').value;
    document.getElementById('result').value = va.substring(0, va.length - 1);
}