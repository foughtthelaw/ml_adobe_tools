{
  "ResponsiveLayoutLib": (function () {
    rL = {
        "nYPos" : function(){
          let Y_normalized = value[1]/thisLayer.source.height;
          let new_y = thisComp.height*Y_normalized;
          return [value[0],new_y]
        },
        "nXPos" : function(){
          let X_normalized = value[0]/thisLayer.source.height;
          let new_x = thisComp.height*X_normalized;
          return [new_x,value[1]]
        },
        "nPos" : function(){
          let n = [value[0]/thisLayer.source.width, value[1]/thisLayer.source.height]
          let new_val = [thisComp.width*n[0],thisComp.height*n[1]];
          return new_val; 
        },
        "nScaleUniform" : function(){
          let scaleFactor;
          if(thisComp.width > thisComp.height){
            scaleFactor = thisComp.height/thisLayer.source.height;
          }else{
            scaleFactor = thisComp.width/thisLayer.source.width;
          }
          return thisLayer.mul(value, scaleFactor)
        }
      }
  })(),
} 