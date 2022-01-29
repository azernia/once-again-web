<template>
	<div>
		<h2>Home组件内容</h2>
		<div>
			<ul class="nav nav-tabs">
				<li>
					<router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
				</li>
				<li>
					<router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
				</li>
			</ul>
			<!-- 缓存多个路由组件 -->
			<!-- <keep-alive :include="['News','Message']"> -->
				
			<!-- 缓存一个路由组件 -->
      <!--
        keep-alive
        使包裹的路由组件不被销毁
        include 指定被缓存的路由组件 不写则为缓存包裹的所有组件
        News 组件的名字
      -->
			<!--<keep-alive include="News">-->
			<!--	<router-view></router-view>-->
			<!--</keep-alive>-->
      <!-- 缓存多个 -->
      <keep-alive :include="['News', 'Message']">
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>
</template>

<script>
	export default {
		name:'Home',
		/* beforeDestroy() {
			console.log('Home组件即将被销毁了')
		}, */
		/* mounted() {
			console.log('Home组件挂载完毕了',this)
			window.homeRoute = this.$route
			window.homeRouter = this.$router
		},  */
	}
</script>