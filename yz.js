[rewrite_local]
^https：\/\/oneplay-api\.instadrum\.com\/drum\/（score|account|course\/user_behaviour） url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/Xiaoyejiazigu.js
^https：\/\/oneplay-api\.instadrum\.com\/drum\/（score|account|course\/user_behaviour|lesson\/add_process） url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/Xiaoyejiazigu.js
^https：\/\/oneplay-api\.xiaoyezi\.com\/drum\/（score|account|course\/user_behaviour） url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/Xiaoyejiazigu.js
^https：\/\/oneplay-api\.xiaoyezi\.com\/drum\/（score|account|course\/user_behaviour|lesson\/add_process） url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/Xiaoyejiazigu.js
[中庭]
主机名 = oneplay-api.instadrum.com， oneplay-api.xiaoyezi.com
@@ -21,18 +21,21 @@ if （url.indexOf（“/drum/score/”） ！= -1）{
}
如果 （URL.indexOf（“/drum/course/user_behaviour”） ！= -1){
    body = 身体。替换（/“unlock_status”：0/g， “\”unlock_status\“：1”）;是否解锁
    body = 身体。替换（/“process_rate”：0/g， “\”process_rate\“：100”）;进度
    body = 身体。替换（/“process_rate”：\d+/g， “\”process_rate\“：100”）;进度

} else if （url.indexOf（“/drum/account”） ！= -1){
    设 obj = JSON。解析（正文);
    OBJ的。数据。订阅 = {
        “状态”： 1，
        “start_time”： “19999999999”，
        “end_time”： “19999999999”，
        “auto_renew”： “1”
      };

    };
    正文 = JSON。stringify（obj);
} else if （url.indexOf（“/drum/lesson/add_process”） ！= -1){
    body = 身体。替换（/“unlock_status”：0/g， “\”unlock_status\“：1”）;是否解锁
    body = 身体。替换（/“process_rate”：\d+/g， “\”process_rate\“：100”）;进度

}

$done（{正文});
