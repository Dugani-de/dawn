window.st_ScriptTag = { init: true };
function getCurrentScript() {
    if (document.currentScript) {
        return document.currentScript;
    } else {
        // Fallback for older browsers
        var scripts = document.getElementsByTagName('script');
        return scripts[scripts.length - 1];
    }
}

function check_section() {
    if ('sternify' in window) {
        console.log('Variable exists.');
    } else {
        console.log('Variable doesnt exists.');
        document.querySelector(`[class*='st_check-section']`).remove();
        if (Shopify.designMode) {
            document.querySelector('.st_not-found').innerHTML = `<style>
                .st_not-found-wrapper {
                  display: none;
                  max-width: 130rem;
                  display: flex;
                  margin: 0 auto;
                  gap: 100px;
                  height: 50rem;
                  align-items: center;
                  justify-content: flex-start;
                  background-color: #fbfbfb;
                  border-radius: 30px;
                  /* border: 1px red dashed; */
                  /* padding: 30px; */
                  margin-block: 70px;
                }
                .st_not-found-img-wrapper {
                  height: 100%;
                  display: flex;
                }
                .st_not-found-img-wrapper img {
                  max-width: 100%;
                  max-height: 100%;
                  object-fit: contain;
                  border-radius: 20px;
                }
                .st_not-found-text-wrapper {
                  display: flex;
                  flex-direction: column;
                  max-width: 50%;
                  gap: 10px;
                }
                .st_not-found-title {
                  font-size: 30px;
                  font-family: 'Poppins';
                  font-weight: 700;
                  line-height: 1.3;
                }
                .st_not-found-steps-wrapper {
                  font-size: 20px;
                }
                .st_not-found-steps-title {
                  font-family: 'Poppins';
                  font-weight: 500;
                  font-size: 20px;
                }
                .st_not-found-icon {
                  padding: 10px;
                  background-color: #ffeded;
                  width: 50px;
                  height: 50px;
                  border-radius: 10px;
                }
                .st_not-found-icon svg {
                  max-height: 100%;
                  max-width: 100%;
                  fill: #ff0000;
                }
        
                @media screen and (max-width: 600px) {
                  .st_not-found-wrapper {
                    flex-direction: column;
                    height: unset;
                    gap: 20px;
                    padding: 30px;
                  }
                  .st_not-found-text-wrapper {
                    max-width: 90%;
                  }
                  .st_not-found-img-wrapper {
                    height: fit-content;
                  }
                }
              </style>
        
              <div class="st_not-found-wrapper">
                <div class="st_not-found-img-wrapper">
                  <img src="https://cdn.shopify.com/s/files/1/0799/5880/2740/files/Frame_158.png?v=1716736704">
                </div>
                <div class="st_not-found-text-wrapper">
                  <div class="st_not-found-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#F3F3F3" viewBox="0 0 256 256">
                      <path d="M240.26,186.1,152.81,34.23h0a28.74,28.74,0,0,0-49.62,0L15.74,186.1a27.45,27.45,0,0,0,0,27.71A28.31,28.31,0,0,0,40.55,228h174.9a28.31,28.31,0,0,0,24.79-14.19A27.45,27.45,0,0,0,240.26,186.1Zm-20.8,15.7a4.46,4.46,0,0,1-4,2.2H40.55a4.46,4.46,0,0,1-4-2.2,3.56,3.56,0,0,1,0-3.73L124,46.2a4.77,4.77,0,0,1,8,0l87.44,151.87A3.56,3.56,0,0,1,219.46,201.8ZM116,136V104a12,12,0,0,1,24,0v32a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,176Z"></path>
                    </svg>
                  </div>
                  <div class="st_not-found-title">Oops! Sternify 💫 ist nicht aktiv</div>
                  <div class="st_not-found-steps-wrapper">
                    <div class="st_not-found-steps-title">Gehe wie folgt vor:</div>
                    <div class="st_not-found-steps">
                      <div>1. Klicke auf Einbettungen</div>
                      <div>2. Aktiviere Sternify</div>
                      <div>3. Speichern und Du bist Startklar!</div>
                    </div>
                  </div>
                </div>
              </div>`;
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    check_section();
});

document.addEventListener('shopify:section:load', function () {
    console.log('shopify:section:load');
    check_section();
});