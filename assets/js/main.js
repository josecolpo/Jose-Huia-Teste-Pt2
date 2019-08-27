function mask(o,option){
    var objVal = o;
	
	if(option == 0){
		objVal.value = crm(objVal.value);
	}
	
	function crm(v){
		v = v.replace(/\D/g,"");
		v = v.replace(/(\d{3})(\d)/,"$1.$2");
		v = v.replace(/(\d{3})(\d)/,"$1-$2");
		return v;
	}
}

function check(){	
	var crm = crm(document.getElementsByName("crm")[0].value);
	var uf = uf(document.getElementsByName("uf")[0].value);
	
	if(crm == true && uf == true){
		aviso(2,1);
		setTimeout(function(){
			window.open('https://www.huia.haus/','_top');
		}, 3000);
	}
	
	return false;
	
	function crm(val){
		if(val.length == 9){
			aviso(0,0);
			return true;
		}
		aviso(0,1);
		return false;
	}
	
	function uf(val){
		if(val != "Selecionar"){
			aviso(1,0);
			return true;
		}
		aviso(1,1);
		return false;
	}
	
}

function aviso(id, option){
	var crm = document.getElementById('avisoCrm');
	var uf = document.getElementById('avisoUf');
	var sucesso = document.getElementById('avisoSucesso');
	
	if(id == 0){
		configura(crm, option);
	}else if(id == 1){
		configura(uf, option);
	}else{
		configura(sucesso, option);
	}
	
	function configura(obj, option){
		if(option == 1){
			exibe(obj);
		}else{
			remove(obj);
		}
	}
	
	function exibe(obj){
		obj.style.display = "block";
	}
	
	function remove(obj){
		obj.style.display = "none";
	}	
}