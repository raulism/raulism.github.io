function countCode() {
        var password = $("#password").val();
        var key = $("#key").val();
        if (password && key) {
          var md5one = $.md5(password, key);
          var md5two = $.md5(md5one, 'raulism');
          var md5three = $.md5(md5one, 'koniliu');
          var rule = md5three.split("");
          var source = md5two.split("");
          for (var i = 0; i <= 31; i++) {
            if (isNaN(source[i])) {
              str = "raulismlovekoniliuatNanjing20140302";
              if (str.search(rule[i]) > -1) {
                source[i] = source[i].toUpperCase();
              }
            }
          }
          var code32 = source.join("");
          var code1 = code32.slice(0, 1);
          if (isNaN(code1)) {
            var code16 = code32.slice(0, 16);
          } else {
            var code16 = code32.slice(1, 16) + "N";
          }
          $("#code16").text(code16);
          document.getElementById('code16').value = code16; 
          window.clipboardData.setData("text",code16);
        }
      }
      $(function() {
        $('#password').change(countCode);
        $('#key').change(countCode);
        $('#password').keyup(countCode);
        $('#key').keyup(countCode);
      });