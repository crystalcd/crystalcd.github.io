<template>
	<div v-click-outside="hideMenu" class="color-picker" v-if="$themeConfig.modePicker !== false" >
		<a class="color-button" @click.prevent="showMenu = !showMenu">
      <reco-icon icon="reco-color" />
		</a>
		<ModuleTransition :transform=" ['translate(-50%, 0)', 'translate(-50%, -10px)']">
			<div v-show="showMenu" class="color-picker-menu">
				<ModePicker />
			</div>
		</ModuleTransition>


		      <div class="scene">
            <div class="upper">
              <div class="moon">
                <div class="crater1"></div>
                <div class="crater2"></div>
              </div>
              <div class="star1"></div>
              <div class="star2"></div>
              <div class="star3"></div>
              <div class="cloud1">
                <div class="circle"></div>
                <div class="filler"></div>
              </div>
              <div class="cloud2">
                <div class="circle"></div>
                <div class="filler"></div>
              </div>
              <div class="tail">
                <div class="left"></div>
                <div class="right"></div>
                <div class="body"></div>
              </div>
              <div class="drop"></div>
            </div>
            <div class="lower">
              <div class="whale">
                <div class="eye"></div>
                <div class="detail1">
                  <div class="detail2"></div>
                </div>
              </div>
              <div class="fin"></div>
            </div>
          </div>


	</div>
</template>

<script>
import { RecoIcon, ModuleTransition } from '@vuepress-reco/core/lib/components'
import ClickOutside from 'vue-click-outside'
import ModePicker from './ModePicker'
import applyMode from './applyMode'

export default {
  name: 'UserSettings',

  directives: {
    'click-outside': ClickOutside
  },

  components: {
    ModePicker,
    RecoIcon,
    ModuleTransition
  },

  data () {
    return {
      showMenu: false
    }
  },

  // 为了在保证 modePicker 在 SSR 中正确开关，并实现管理，Mode 组件将负责 modePicker 关闭的情况
  mounted () {
    // modePicker 关闭时默认使用主题设置的模式
    const themeMode = this.$themeConfig.mode || 'auto'
    const { modePicker } = this.$themeConfig
    if (modePicker === false) {
      // 为 'auto' 模式设置监听器
      if (themeMode === 'auto') {
        window.matchMedia('(prefers-color-scheme: dark)').addListener(() => {
          applyMode(themeMode)
        })
        window.matchMedia('(prefers-color-scheme: light)').addListener(() => {
          applyMode(themeMode)
        })
      }
      applyMode(themeMode)
    }
  },

  methods: {
    hideMenu () {
      this.showMenu = false
    }
  }
}
</script>

<style lang="stylus">
.color-picker {
	position: relative;
	margin-right: 1em;
  cursor pointer;
	.color-button {
		align-items: center;
		height: 100%;
		.iconfont {
			font-size 1.4rem
			color: $accentColor
		}
	}

	.color-picker-menu {
		position: absolute;
		top: 40px;
		left: 50%;
		z-index: 150;

		ul {
			list-style-type: none;
			margin: 0;
			padding: 0;
		}
	}
}

@media (max-width: $MQMobile) {
	.color-picker {
		margin-right: 1rem;
		.color-picker-menu {
			left: calc(50% - 35px);
			&::before {
				left: calc(50% + 35px);
			}
		}
	}
}





.scene {
  width: 500px;
  height: 500px;
  position: absolute;
  top: 900%;
  left: 50%;
  transform: translate(-50%,-50%);


  .upper {
    width: 100%;
    height: 300px;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
  }

  .moon {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background-color: deeppink;
    position: absolute;
    bottom: -150px;
    left: 50px;
    border: 5px solid #333;
    box-sizing: border-box;
    box-shadow: inset 0 -160px mediumvioletred;
    opacity: 0.9;
  }

  .crater1 {
    width: 20px;
    height: 20px;
    border-radius: 50% ;
    position: absolute;
    top: 20px;
    right: 150px;
    background-color: mediumvioletred;
    opacity: 0.2;
    border: 1px solid #333;
  }

  .crater2 {
    width: 50px;
    height: 50px;
    border-radius: 50% ;
    position: absolute;
    top: 70px;
    right: 180px;
    background-color: mediumvioletred;
    opacity: 0.2;
    border: 1px solid #333;
  }

  .cloud1 {
    width: 200px;
    height: 150px;
    position: absolute;
    top: 100px;
    right: -50px;
    animation: float2 4s ease-in-out infinite alternate;
  }

  .cloud2 {
    width: 200px;
    height: 150px;
    position: absolute;
    top: 0;
    left: 0;
    animation: float1 4s ease-in-out infinite alternate;
  }

  @keyframes float1 {
    from {transform: translateX(-50px);}
    to {transform: translateX(50px);}
  }

  @keyframes float2 {
    from {transform: translateX(50px);}
    to {transform: translateX(-50px);}
  }

  .circle {
    width: 80px;
    height: 80px;
    position: absolute;
    top: 0;
    left: 60px;
    border-radius: 50%;
    background-color: fuchsia;
  }

  .circle::before {
    content: "";
    width: 80px;
    height: 80px;
    position: absolute;
    top: 30px;
    left: -40px;
    border-radius: 50%;
    background-color: fuchsia;
  }

  .circle::after {
    content: "";
    width: 80px;
    height: 80px;
    position: absolute;
    top: 30px;
    left: 40px;
    border-radius: 50%;
    background-color: fuchsia;
  }

  .filler {
    width: 145px;
    height: 40px;
    border-radius: 17px;
    position: absolute;
    top: 70px;
    left: 28px;
    background-color: fuchsia;
    box-shadow: inset 0 -5px purple;
  }

  .star1 {
    width: 20px;
    height: 5px;
    border-radius: 5px;
    background-color: purple;
    position: absolute;
    top: 20px;
    right: 0;
    animation: twinkle 0.5s 0.2s linear infinite alternate;
  }

  .star1::after {
    content: "";
    width: 5px;
    height: 20px;
    border-radius: 5px;
    background-color: purple;
    position: absolute;
    top: -7px;
    right: 8px;
    animation: twinkle 0.5s  0.2s linear infinite alternate;
  }

  .star2 {
    width: 20px;
    height: 5px;
    border-radius: 5px;
    background-color: purple;
    position: absolute;
    top: -20px;
    right: 200px;
    animation: twinkle 0.5s 0.3s linear infinite alternate;
  }

  .star2::after {
    content: "";
    width: 5px;
    height: 20px;
    border-radius: 5px;
    background-color: purple;
    position: absolute;
    top: -7px;
    right: 8px;
    animation: twinkle 0.5s 0.3s linear infinite alternate;
  }

  .star3 {
    width: 20px;
    height: 5px;
    border-radius: 5px;
    background-color: purple;
    position: absolute;
    top: 130px;
    left: -20px;
    animation: twinkle 0.5s linear infinite alternate;
  }

  .star3::after {
    content: "";
    width: 5px;
    height: 20px;
    border-radius: 5px;
    background-color: purple;
    position: absolute;
    top: -7px;
    left: 8px;
    animation: twinkle 0.5s linear infinite alternate;
  }

  @keyframes twinkle {
    to {background-color: deeppink;}
  }

  .tail {
    width: 150px;
    height: 120px;
    position: absolute;
    bottom: -10px;
    left: 2px;
  }

  .left {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: darkslateblue;
    position: absolute;
    top: 10px;
    left: 20px;
    border: 1px solid #333;
    z-index: 1;
  }

  .left::before {
    content: "";
    width: 60px;
    height: 20px;
    border-bottom: 60px solid darkslateblue;
    border-radius: 0 0 0 100%;
    position: absolute;
    top: -20px;
    left: -30px;
    animation: excite1 2s infinite alternate linear;
    transform-origin: right;
  }

  @keyframes excite1 {
    to {transform: rotateZ(-5deg);}
  }

  .right {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: darkslateblue;
    position: absolute;
    top: 10px;
    right: 20px;
    border: 1px solid #333;
    z-index: 1;
  }

  .right::after {
    content: "";
    width: 60px;
    height: 20px;
    border-bottom: 60px solid darkslateblue;
    border-radius: 0 0 100% 0;
    position: absolute;
    top: -20px;
    right: -30px;
    animation: excite2 2s linear alternate infinite;
    transform-origin: left;
  }

  @keyframes excite2 {
    to {transform: rotateZ(5deg);}
  }


  .body {
    height: 80px;
    width: 58px;
    border-radius: 25px;
    position: absolute;
    bottom: -18px;
    left: 54px;
    background-color: darkslateblue;
    transform: rotateZ(-10deg);
    border: 2px solid #333;
  }

  .drop {
    height: 13px;
    width: 13px;
    border-radius: 50%;
    background-color: purple;
    position: absolute;
    bottom: -25px;
    right: 180px;
    animation: spray 3s ease-out infinite;
  }

  .drop::before {
    content: "";
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: purple;
    position: absolute;
    bottom: 0;
    right: 0;
    animation: spray 3s 0.3s ease-out infinite;
  }

  .drop::after {
    content: "";
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: purple;
    position: absolute;
    bottom: 0;
    right: 0;
    animation: spray 3s 0.7s ease-out infinite;
  }

  @keyframes spray {
    0% {transform: translateY(0);}
    30% {transform: translateY(-100px);}
    60% {transform: translateY(0);}
  }


  .lower {
    width: 100%;
    height: 200px;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 5px solid #333;
    overflow: hidden;
  }

  .whale {
    width: 400px;
    height: 400px;
    border-radius: 300px;
    position: absolute;
    top: -250px;
    left: 50px;
    background-color: slateblue;
    box-shadow: inset 0 -10px darkslateblue;
    border: 5px solid #333;
    box-sizing: border-box;
    overflow: hidden;
  }

  .eye {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    bottom: 110px;
    right: 120px;
    background-color: #333;
    animation: blink 2s linear infinite;
  }

  @keyframes blink {
    0% {transform: scaleY(0.1);}
    5% {transform: scaleY(0.1);}
    5.1% {transform: scaleY(1);}
  }

  .detail1 {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    bottom: 10px;
    right: 0px;
    background-color: lightsteelblue;
    overflow: hidden;
    border: 2px solid #333;
    box-sizing: border-box;
  }

  .fin {
    width: 50px;
    height: 120px;
    border-radius: 40px;
    position: absolute;
    bottom: 0;
    right: 180px;
    background-color: slateblue;
    border: 5px solid #333;
    border-top: 5px solid transparent;
    transform: rotateZ(15deg);
    box-shadow: inset 0 -10px darkslateblue;
    animation: swim 2s linear infinite alternate;
    transform-origin: top;
  }

  @keyframes swim {
    to {transform: rotateZ(20deg);}
  }

  .detail2 {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    right: 30px;
    border-bottom: 8px solid #333;
    border-right: 8px solid #333;
    transform: rotateZ(-50deg);
  }

  .detail2::before {
    content: "";
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
    bottom: 20px;
    right: 10px;
    border-bottom: 8px solid #333;
    border-right: 8px solid #333;
  }

  .detail2::after {
    content: "";
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
    bottom: 5px;
    right: 0;
    border-bottom: 8px solid #333;
    border-right: 8px solid #333;
  }
}



</style>
