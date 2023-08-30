let names = [ "7O8aO9pfxp","Tqv62BchLV","Tp8mN4fnW6","ezXNgwNVq2","bK2wEWgbYU","J5uo97ODtq","o4QSJ7KyLE","8JupYL74lk","vPyfoqG1Vv","saO37MmoOZ","VP9d5jI7z6","RVHNmjhk2q","5u5qVcwhkr","yO8DBxyUzN","cn2p2eiaKT","aZ7iRH9OMH","RGq4jdsRQK","QxF4iSWxdP","5Xl7krxuxE","fHm2VKImWB","PKMidfYaFo","dpkcyoMXvW","99AV6OQBQV","LhxJarw2DJ","UQwnRqS04l","pkVSbhIdfB","SWek9Jk3gH","NJfwmwj6P7","EnixFn2JuZ","ior48xJ9yu","FthBuRrcTA","XRpl3JDH1m","FX4feCpWI8","1rDBcUoiov","nmeKWOwAw6","qH8IFUPcUi","nxD6tdX5Ts","qpnK6oaNHL","bseWSzqO30","90BUBOxYvN","xeQ1TRCKZR","10uqZhkWzr","pNiIEpvA2e","1srmem14yb","GFJPghbVIW","Ttmy1oRBg9","Xhdqj7Vhno","lpQ8iKYsmm","7FD5uZYWXC","GNHaYbZR7a","9kibGYloGU","83Kil2PobG","yekycnFKTg","sysVJfVSMG","A95ed6c573","HlxFmbv0re","Z2N5EZ1tJ7","ALdjWf4Rns","8rSgSUpX3l","hJl661UZEA","89vBhIA8rz","hClsLCNHVv","BQORl6vJVq","ncpMVSoFLd","zhUkE8CziE","5ho2c4DB4o","DpHw00AGwF","fThMExA9FZ","urvHmGvjPj","QxjTizk2Gq","GysyM4XxtQ","ZLc8qJ4lmm","0RRl5WZ7Du","86knp1SW9X","OMt0CN8vms","jRsowaIJZ8","Igk3ygEUum","mhCAJ6IhlY","DJPS3ro10g","xmAsxGzMLv","7dBi6Skc5J","pOI74ueyFf","o623G29eTp","tNWz8yjnp6","nDu3jlzpBP","QKOcZjcaeV","jnxjE1czXY","AFg3yy9unJ","qIoYNmCFVD","dbWmQDzSUa","8IbpiSGXZ8","3pbKSa20xW","mOydsWIXS7","w5CDayKL7M","9VLjcsD452","xWKa3FVCG2","DoJfotegaw","b2vTxiPx00","lPDfvQ2u9H","iX7Oi5tg9l" ]
let test =[]
for(let i=0;i<names.length;i++){
    if(isNaN(names[i].charAt(0))){
        test.push(names[i][0].toUpperCase()+names[i].slice(1).toLocaleLowerCase())

    }
}
test.sort();
console.log(test)
