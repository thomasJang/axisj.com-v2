import Icons from "@/components/client/common/@Icon";
import * as React from "react";

interface Props {
  size?: string;
  onClick?: () => void;
}

export function IconSolution1({ size, onClick }: Props) {
  return (
    <Icons size={size} onClick={onClick}>
      <svg width='273' height='90' viewBox='0 0 273 90' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip0_896_177)'>
          <path
            d='M94.3768 53.4978L95.5138 51.0812C95.5138 51.0812 95.6172 50.7727 95.6689 50.6185C95.7206 50.4642 95.7206 50.3614 95.7206 50.2586C95.7206 49.9501 95.4621 49.7958 94.9453 49.7958H84.8667C84.5049 49.7958 84.1948 49.8472 83.9881 50.0015C83.7813 50.1557 83.5746 50.3614 83.4195 50.6699L82.0757 53.4978C81.6106 54.5261 81.1454 55.2459 80.6802 55.6572C80.2151 56.0686 79.5948 56.2742 78.8196 56.2742H74.478C73.5994 56.2742 73.1859 56.0171 73.1859 55.4002C73.1859 54.9374 73.3926 54.269 73.8061 53.4464L80.4735 39.1013C80.6802 38.5872 81.1454 37.9702 81.8173 37.3532C82.4892 36.7362 83.2645 36.1192 84.1431 35.6051C85.0218 35.0909 85.9521 34.6282 86.8824 34.2683C87.8644 33.9083 88.7431 33.7027 89.57 33.7027H105.282C105.954 33.7027 106.523 33.8055 107.091 34.0626C107.608 34.3197 108.073 34.6282 108.487 35.0395C108.9 35.4508 109.159 35.8621 109.365 36.3763C109.572 36.8905 109.675 37.3532 109.675 37.8674C109.675 38.4329 109.572 38.8443 109.365 39.1528L102.75 53.4978C102.285 54.5261 101.768 55.2459 101.303 55.6572C100.837 56.0686 100.217 56.2742 99.4419 56.2742H95.1003C94.2734 56.2742 93.8599 56.0171 93.8599 55.4002C93.8599 54.9374 94.0666 54.269 94.4801 53.4464L94.3768 53.4978ZM97.943 44.0887C97.943 44.0887 98.3565 44.0373 98.5632 43.883C98.77 43.7288 98.925 43.5745 99.0801 43.3689L100.217 40.8495V40.6952C100.217 40.2325 100.01 39.8726 99.5969 39.6669C99.1835 39.4613 98.7183 39.3584 98.1498 39.3584H91.2757C90.7588 39.3584 90.1386 39.5127 89.5184 39.7183C88.8981 39.9754 88.3813 40.3353 87.9678 40.8495L86.7274 43.4717C86.7274 43.4717 86.7274 43.7802 86.8307 43.883C86.8824 43.9858 87.0375 44.0373 87.1925 44.0373H97.943V44.0887Z'
            fill='#010101'
          />
          <path
            d='M129.781 56.3256C129.006 56.3256 128.385 56.12 127.817 55.7086C127.248 55.2973 126.732 54.7317 126.266 54.1148C125.801 53.4978 125.336 52.7779 124.974 52.0067C124.612 51.2355 124.199 50.5671 123.785 49.8987C122.752 50.5671 121.666 51.2355 120.633 52.0067C119.599 52.7779 118.514 53.4463 117.48 54.1148C116.446 54.7317 115.464 55.2973 114.534 55.7086C113.604 56.12 112.777 56.3256 112.001 56.3256H104.404C104.404 56.3256 104.352 56.3256 104.352 56.2742C104.352 56.2742 104.352 56.2742 104.352 56.2228C104.352 56.2228 104.352 56.1714 104.352 56.12V55.9657C105.696 55.1945 107.04 54.3718 108.383 53.4463C109.727 52.5209 111.123 51.544 112.466 50.5671C113.81 49.5902 115.154 48.5618 116.498 47.5335C117.842 46.5052 119.134 45.4769 120.426 44.4486C119.651 43.2146 119.03 42.0835 118.462 41.0551C117.893 40.0782 117.428 39.1528 116.963 38.3301C116.498 37.5075 116.084 36.7362 115.723 36.0678C115.361 35.3994 114.896 34.731 114.482 34.114L114.637 33.9598C114.637 33.9598 114.792 33.7541 114.844 33.7541H120.271C121.046 33.7541 121.666 33.9598 122.235 34.3711C122.803 34.7824 123.32 35.348 123.785 35.965C124.251 36.6334 124.716 37.3018 125.078 38.073C125.439 38.8443 125.853 39.5127 126.266 40.1811C127.248 39.5127 128.282 38.8443 129.367 38.073C130.453 37.3018 131.538 36.6334 132.572 35.965C133.606 35.348 134.588 34.7824 135.57 34.3711C136.5 33.9598 137.327 33.7541 138.051 33.7541H145.648C145.648 33.7541 145.7 33.7541 145.7 33.9083V34.114C142.961 35.7079 140.325 37.5589 137.637 39.5641C135.001 41.5693 132.262 43.6259 129.419 45.6826C130.143 46.9165 130.763 48.0477 131.331 49.076C131.9 50.1043 132.365 50.9784 132.83 51.801C133.296 52.6237 133.761 53.3949 134.174 54.0633C134.588 54.7317 135.053 55.3487 135.518 55.9143V56.0686C135.518 56.0686 135.26 56.2742 135.208 56.2742H129.781V56.3256Z'
            fill='#010101'
          />
          <path
            d='M138.826 55.4516C138.826 54.9888 139.033 54.3204 139.446 53.4978L143.736 44.2429C144.046 43.5231 144.459 43.0089 144.925 42.649C145.39 42.3405 145.907 42.1349 146.579 42.1349H162.756C163.273 42.1349 163.841 42.032 164.41 41.8264C164.978 41.6207 165.495 41.2608 165.909 40.7466C166.167 40.2325 166.271 39.8726 166.271 39.7183C166.271 39.5127 166.012 39.4098 165.495 39.4098H152.522C152.057 39.4098 151.747 39.2556 151.592 38.9471C151.437 38.6386 151.334 38.2787 151.334 37.8674C151.334 37.6617 147.199 37.3532 147.302 36.8905C147.406 36.4277 147.561 35.965 147.716 35.5536C147.871 35.1423 148.129 34.6796 148.388 34.3197C148.646 33.9598 149.008 33.7541 149.37 33.7541H173.92C174.695 33.7541 175.212 33.9598 175.574 34.3711C175.936 34.7824 176.091 35.2966 176.091 35.8621C176.091 36.4277 175.936 37.0447 175.626 37.7645L173.506 42.3405C173.403 42.5976 173.248 42.8547 172.99 43.0604C172.731 43.266 172.524 43.5231 172.214 43.7288C171.956 43.9344 171.646 44.1915 171.336 44.3458C171.026 44.5514 170.767 44.7571 170.509 44.9627C170.974 45.4769 171.181 46.0939 171.181 46.7109C171.181 47.0194 171.129 47.3279 170.974 47.6364L168.803 52.3152C168.545 52.8294 168.235 53.2921 167.873 53.8063C167.511 54.3204 167.098 54.6803 166.632 55.0917C166.167 55.4516 165.65 55.7601 165.133 56.0171C164.617 56.2742 164.048 56.3771 163.48 56.3771H140.066C139.188 56.3771 138.774 56.12 138.774 55.503L138.826 55.4516ZM160.895 50.4642C160.895 50.4642 161.257 50.1557 161.464 50.0015C161.671 49.8472 161.774 49.5902 161.929 49.3845C162.084 49.1788 162.187 48.9732 162.239 48.7675C162.239 48.6647 162.239 48.5618 162.291 48.459C162.291 48.0991 161.877 47.8934 160.999 47.8934H151.179C151.179 47.8934 150.713 48.0477 150.403 48.3562C150.145 48.6647 149.99 48.9732 149.835 49.2303C149.68 49.4873 149.628 49.7958 149.628 50.1043C149.628 50.4642 149.731 50.6185 149.938 50.6185H160.327C160.327 50.6185 160.74 50.5671 160.895 50.4128V50.4642Z'
            fill='#010101'
          />
          <path
            d='M207.67 39.1528L202.243 50.927C201.985 51.4411 201.52 52.0581 200.848 52.6751C200.176 53.2921 199.401 53.9091 198.522 54.4232C197.643 54.9374 196.713 55.4001 195.783 55.7601C194.852 56.12 193.922 56.3256 193.147 56.3256H177.434C176.763 56.3256 176.142 56.2228 175.626 55.9657C175.109 55.7086 174.644 55.4001 174.23 54.9888C173.868 54.5775 173.558 54.1662 173.351 53.7034C173.145 53.2407 173.041 52.7265 173.041 52.2124C173.041 51.6468 173.145 51.1841 173.3 50.927L178.778 39.1528C178.985 38.6386 179.45 38.0216 180.122 37.4046C180.794 36.7876 181.569 36.1706 182.448 35.6565C183.327 35.1423 184.257 34.6796 185.187 34.3197C186.169 33.9598 187.048 33.7541 187.875 33.7541H203.587C204.259 33.7541 204.828 33.8569 205.396 34.114C205.913 34.3711 206.378 34.6796 206.792 35.0909C207.205 35.5022 207.463 35.9136 207.67 36.4277C207.877 36.9419 207.98 37.4046 207.98 37.9188C207.98 38.4844 207.877 38.8957 207.67 39.2042V39.1528ZM196.455 39.4098H189.736C189.167 39.4098 188.598 39.5127 187.927 39.7697C187.255 40.0268 186.738 40.3867 186.273 40.9009L182.448 49.1788V49.3331C182.448 49.7958 182.655 50.1557 183.068 50.3614C183.482 50.5671 183.998 50.6699 184.515 50.6699H191.338C191.906 50.6699 192.475 50.5156 193.095 50.31C193.715 50.0529 194.232 49.693 194.646 49.1788L198.47 40.9009V40.7466C198.47 40.2839 198.264 39.924 197.85 39.7183C197.437 39.5127 196.92 39.4098 196.403 39.4098H196.455Z'
            fill='#010101'
          />
          <path
            d='M240.335 39.1528L234.908 50.927C234.65 51.4411 234.185 52.0581 233.513 52.6751C232.841 53.2921 232.066 53.9091 231.187 54.4232C230.308 54.9374 229.378 55.4001 228.448 55.7601C227.517 56.12 226.587 56.3256 225.812 56.3256H210.099C209.428 56.3256 208.807 56.2228 208.29 55.9657C207.774 55.7086 207.308 55.4001 206.895 54.9888C206.533 54.5775 206.223 54.1662 206.016 53.7034C205.81 53.2407 205.706 52.7265 205.706 52.2124C205.706 51.6468 205.81 51.1841 205.965 50.927L211.443 39.1528C211.65 38.6386 212.115 38.0216 212.787 37.4046C213.459 36.7876 214.234 36.1706 215.113 35.6565C215.991 35.1423 216.922 34.6796 217.852 34.3197C218.834 33.9598 219.713 33.7541 220.54 33.7541H236.252C236.924 33.7541 237.492 33.8569 238.061 34.114C238.578 34.3711 239.043 34.6796 239.456 35.0909C239.87 35.5022 240.128 35.9136 240.335 36.4277C240.542 36.9419 240.645 37.4046 240.645 37.9188C240.645 38.4844 240.542 38.8957 240.335 39.2042V39.1528ZM229.119 39.4098H222.4C221.832 39.4098 221.263 39.5127 220.591 39.7697C219.92 40.0268 219.403 40.3867 218.938 40.9009L215.113 49.1788V49.3331C215.113 49.7958 215.32 50.1557 215.733 50.3614C216.147 50.5671 216.663 50.6699 217.18 50.6699H224.003C224.571 50.6699 225.14 50.5156 225.76 50.31C226.38 50.0529 226.897 49.693 227.311 49.1788L231.135 40.9009V40.7466C231.135 40.2839 230.928 39.924 230.515 39.7183C230.101 39.5127 229.585 39.4098 229.068 39.4098H229.119Z'
            fill='#010101'
          />
          <path
            d='M246.537 53.4978L252.636 40.3353L252.688 39.9754C252.688 39.5641 252.533 39.3584 252.274 39.3584H249.018C248.553 39.3584 248.243 39.2042 248.088 38.8957C247.933 38.5872 247.829 38.2273 247.829 37.8159C247.829 37.0447 244.935 36.3249 245.245 35.6565C245.245 35.5536 245.4 35.3994 245.504 35.1423C245.607 34.8852 245.762 34.6796 245.969 34.5253C246.124 34.3197 246.331 34.114 246.486 33.9598C246.641 33.8055 246.847 33.7027 247.054 33.7027H272.742C272.742 33.7027 273.052 33.8569 273.052 34.1654C273.052 34.4225 273 34.6796 272.897 34.9881C272.793 35.2966 272.69 35.5536 272.69 35.6565C272.483 36.0678 272.225 36.4791 271.966 36.8905C271.708 37.3018 271.346 37.7131 270.984 38.073C270.623 38.4329 270.209 38.7414 269.847 38.9471C269.485 39.1528 269.072 39.307 268.658 39.307H262.301C262.301 39.307 261.888 39.4098 261.681 39.6155C261.423 39.8212 261.216 40.0268 261.112 40.2839L255.014 53.4464C254.548 54.3718 254.083 55.0917 253.618 55.5544C253.153 56.0171 252.481 56.2742 251.706 56.2742H247.364C246.486 56.2742 246.072 55.9657 246.072 55.3487C246.072 55.0917 246.124 54.8346 246.227 54.5261C246.331 54.2176 246.486 53.8577 246.641 53.4464L246.537 53.4978Z'
            fill='#010101'
          />
          <path
            d='M170.405 10.9255C169.888 10.2057 168.958 9.89717 167.821 10.0514L170.354 13.6505C170.87 12.6222 170.922 11.6453 170.405 10.9255Z'
            fill='#010101'
          />
          <path
            d='M167.821 10C166.839 10.1028 165.702 10.5656 164.565 11.3368L158.673 15.4501C158.673 15.4501 158.466 15.81 158.569 16.0156L161.567 20.2317C161.567 20.2317 161.929 20.4374 162.136 20.3346L168.028 16.2213C169.165 15.4501 169.94 14.5246 170.405 13.5991L167.873 10H167.821ZM160.792 18.1237L160.378 17.5067L164.203 14.8331L164.617 15.4501L160.792 18.1237ZM167.821 14.6788C167.149 15.1416 166.167 14.9873 165.702 14.3189C165.237 13.6505 165.392 12.6736 166.064 12.2109C166.736 11.7481 167.718 11.9024 168.183 12.5708C168.648 13.2392 168.493 14.2161 167.821 14.6788Z'
            fill='#010101'
          />
          <path
            d='M166.787 16.7869C166.167 17.5581 166.012 19.0492 166.167 19.8204C166.322 20.5917 166.012 21.5686 165.133 22.1855L164.255 22.8025L162.187 19.9232L166.787 16.7869Z'
            fill='#010101'
          />
          <path
            d='M163.635 12.1595C162.704 12.468 161.257 12.1595 160.585 11.7481C159.913 11.3368 158.828 11.2854 158.001 11.9024L157.122 12.5194L159.19 15.3987L163.686 12.1595H163.635Z'
            fill='#010101'
          />
          <path
            d='M157.794 18.9978L156.761 17.5067L157.277 17.1468L157.536 17.5067L158.311 17.2496L158.828 16.427L159.707 17.661L160.378 18.5864L161.205 19.8204L160.275 20.0261L159.758 20.6431L160.017 21.003L159.5 21.4143L158.466 19.9232L157.794 18.9978Z'
            fill='#010101'
          />
          <path
            d='M156.399 18.8435C152.419 21.6714 145.183 27.7384 145.7 28.4069C146.217 29.0753 154.176 24.1393 158.208 21.3629L156.45 18.8435H156.399Z'
            fill='#010101'
          />
          <path
            d='M151.23 33.7541H138.516L138.981 34.7824C138.981 34.7824 143.322 34.9367 145.235 36.6848C147.147 38.4329 149.37 39.4098 152.419 39.4098L156.967 36.1706L151.23 33.7541Z'
            fill='#010101'
          />
          <path
            d='M248.295 33.7541H235.58L236.045 34.7824C236.045 34.7824 240.387 34.9367 242.299 36.6848C244.211 38.4329 246.434 39.4098 249.483 39.4098L254.032 36.1706L248.295 33.7541Z'
            fill='#010101'
          />
          <path
            d='M62.9523 27.6356C62.9523 27.6356 62.9523 26.8644 62.2804 26.0931C61.7119 25.4762 60.6265 24.7563 58.6108 24.1908C58.8692 22.8539 59.6961 22.4426 59.6961 22.4426C60.2647 19.5119 57.7321 19.5119 56.0265 19.4091C54.7861 19.3577 54.5276 21.9799 54.4243 23.4709C52.8737 23.3167 51.0131 23.2139 48.7906 23.2139C47.4985 23.2139 46.4131 23.2139 45.3277 23.3167V16.7869C46.1547 15.5529 47.1367 15.0902 47.1367 15.0902C49.3591 14.1133 49.5659 12.2623 47.8086 12.1595C44.3974 11.9024 43.2603 13.8048 42.8468 15.193H22.3796V15.81C22.3796 15.81 22.5346 19.7176 22.3796 23.728H21.7594L21.3976 28.0984H22.0695C21.9661 29.1781 21.8111 30.2064 21.6043 30.9776C21.5526 31.2861 21.3976 31.4918 21.2942 31.7489C21.2942 31.7489 20.1055 31.3376 18.3998 34.3711C17.056 34.8338 15.8673 34.7824 15.8156 34.7824C10.9572 34.0626 7.13253 34.8852 4.44491 37.199C0.568535 40.541 0 46.0939 0 49.076C0 49.8472 0.31011 50.5156 0.878645 51.0812C2.84267 52.9836 7.70106 53.1379 9.45835 53.1379C9.82014 53.1379 10.0269 53.1379 10.0786 53.1379H28.4267C18.2448 58.228 20.0538 70.5164 20.1055 70.9277C20.3639 72.5216 23.7234 79 34.8357 79C45.0176 79 48.1704 75.7094 50.4445 73.2414L50.9614 72.7273C53.2872 70.3107 57.2153 67.5343 59.7995 66.0946C62.7456 64.4493 63.004 59.4106 63.004 59.1535V27.6356H62.9523ZM54.5793 66.0946C51.8917 68.614 47.8603 69.5395 43.4671 64.8092C39.0738 60.079 34.1638 56.6341 30.9076 56.2228C28.6335 55.9143 26.411 56.3771 24.8605 57.1997C26.4627 55.4516 28.6852 53.9605 31.7863 53.035C31.8379 53.035 32.4582 52.6751 33.1818 52.1095C36.0761 52.0067 41.8648 52.3666 47.3951 56.6855C47.3951 56.6855 49.4108 54.0119 49.8243 52.1095C49.8243 52.1095 43.8805 47.4821 35.5076 47.8934C35.5076 47.8934 35.5076 47.7906 35.5076 47.7392C35.5076 47.5335 35.5593 47.3279 35.5593 47.0708V43.3689C39.0738 45.117 48.6872 46.0939 50.858 45.5283V40.0268C49.7209 40.1297 41.5547 40.7466 35.5593 37.6617V34.2683C37.2649 35.7079 42.4334 36.7362 48.6356 36.7362C54.8378 36.7362 59.8512 35.7079 61.6602 34.3197V59.1021C61.6602 59.1021 61.6602 59.3592 61.6602 59.6677C59.1793 61.57 57.0085 63.7295 54.5276 66.0432L54.5793 66.0946ZM48.7389 30.0522C42.1233 30.0522 38.0401 28.7154 37.575 27.9441C38.0401 27.1729 42.1233 25.8361 48.7389 25.8361C55.3546 25.8361 59.5928 27.2243 59.9029 27.8927C59.5928 28.6639 55.458 30.0522 48.7389 30.0522ZM61.6602 27.2243C61.6602 27.2243 61.7119 27.3785 61.7119 27.43C61.7119 27.3785 61.7119 27.2757 61.6602 27.2243ZM45.7412 13.5991C47.8086 12.9307 46.1547 13.8048 44.8626 15.193H44.139C44.4491 14.576 44.9142 13.9076 45.7929 13.5991H45.7412ZM15.7122 35.9136C15.7122 35.9136 17.7279 36.0164 19.6403 35.0909C20.8807 35.5537 22.7414 36.4791 24.1369 38.0216L26.7728 34.6282C26.7728 34.6282 25.0672 33.1885 22.483 32.1602C22.5863 31.8517 22.7414 31.5946 22.8448 31.2347C23.0515 30.3607 23.2582 29.2295 23.3616 28.0469H27.7031V23.6766H23.6717C23.6717 22.6483 23.7234 21.6714 23.7234 20.7459H43.4671L44.1907 21.4143V23.4195C38.9188 23.8823 36.4379 25.1677 35.3525 26.2474C34.4222 27.1729 34.4222 27.9955 34.4222 28.0469V37.0961C34.4222 37.0961 33.5435 40.2325 34.4222 42.392C34.4222 42.392 34.4222 42.392 34.4222 42.4434V47.0708C34.4222 47.3793 34.4222 47.6878 34.3188 47.9449C34.2155 47.9449 34.1638 47.9449 34.0604 47.9449L33.957 48.0477C31.3211 48.6133 29.047 49.1274 27.6515 49.2817C24.7054 49.6416 19.847 49.1788 17.2628 42.2891C15.6089 37.8674 13.3347 36.2735 11.8875 35.7079C13.0763 35.7079 14.3167 35.7079 15.6605 35.8621L15.7122 35.9136ZM29.6155 52.5209H29.7705C29.7705 52.5209 29.6672 52.5209 29.6155 52.5723V52.5209Z'
            fill='#010101'
          />
          <path
            d='M143.788 44.2429C145.7 40.0782 145.958 39.5641 145.958 39.5641C145.958 39.5641 145.648 42.0835 148.026 42.1863L145.39 45.4769L143.788 44.2429Z'
            fill='#010101'
          />
        </g>
        <defs>
          <clipPath id='clip0_896_177'>
            <rect width='273' height='90' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </Icons>
  );
}
