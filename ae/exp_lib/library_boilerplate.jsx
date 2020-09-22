// baseline starting point for an expression library
// be sure to check out all the lil' gotchas about what's differet.
// details here: https://helpx.adobe.com/after-effects/using/legacy-and-extend-script-engine.html#syntax-requirements-expression-libraries

{
  "LongNameOfLibrary": (function () {
    libObj = {
        "myFunction" : function(){
            throw "it worked";
        }
      };
  })(),
} 