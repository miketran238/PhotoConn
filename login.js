$(window).on("load", function(){
    $("#loginBtn").on('click',function(){
        var username = $("#loginUsername").val().trim();
        var password = $("#loginPassword").val().trim();
        if( username != "" && password != "" ){
            $.ajax({
                url:'login.php',
                type:'post',
                data:{username:username,password:password},
                success:function(response){
                    var msg = "";
                    console.log(response)
                    if(response == 1){
                        msg = "";
                        location.href = "profile.php";
                        console.log(msg);
                        $("#loginMessage").html(msg);
                    }else{
                        msg = "Invalid username and password!";
                        console.log(msg);
                        $("#loginMessage").html(msg);
                    }

                }
            });
        }
    });

});