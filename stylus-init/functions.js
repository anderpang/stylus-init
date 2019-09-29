
function plugin(){
    return function(){
        this.define("jsLinearGradient",function(value,...args){
            //console.log(this.renderer.nodes);
             var i=args.length;
            
            while(i--){
                if(args[i].string==="__CALL__"){
                    args[i]=value;
                    break;
                }
            }
            return args;
        })
    }
}

module.exports=plugin;