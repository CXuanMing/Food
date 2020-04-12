<template>
	<div class="home">
		<ul class="type-list">
			<router-link v-for="(item, index) in types" :key="index" :to="'/list/' + item.id" tag="li">
				<img :src="'/public/img/icon/' + item.img + '.png'"  alt="">
				<p>{{item.text}}</p>
			</router-link>
		</ul>
		<!-- 广告 -->
		<ul class="ad">
			<router-link v-for="(item, index) in ad" :key="index" tag="li" :to="'/detail/' + item.id">
				<h3 :class="'color-' + index">{{item.title}}</h3>
				<p>{{item.description}}</p>
				<img :src="'/public/img/ad/' + item.url"  alt="">
			</router-link>
		</ul>
		<!-- 猜你喜欢 -->
		<div class="guess">
			<div class="guess-title">猜你喜欢</div>
			<!-- 父组件向子组件通讯 -->
			<Item v-for="(item, index) in list" :key="index" :data="item"></Item>
		</div>
	</div>
</template>
<style type="text/css" lang="scss">
@import '../base.scss';
	ul {
		list-style: none;
	}
	.home {
		.type-list {
			// 清除浮动
			@include clearfix;
			background: #fff;
			padding: 5px 0 10px;
			li {
				width: (100%/5);
				float: left;
				text-align: center;
				img {
					width: 60%;
				}
				p {
					font-size: 12px;
					margin: 5px 0 10px;
				}
			}
		}
		.ad {
			display: flex;
			background: #fff;
			margin: 10px 0;
			li {
				flex: 1;
				text-align: center;
				padding: 15px 0 20px;
				border-right: 2px solid #efefef;
				&:last-child {
					border-right: none;
				}
				// 枚举
				$i: 0;
				@each $item in red, green, purple {
					.color-#{$i} {
						color: $item;
					}
					$i: $i + 1;
				}
				h3 {
					font-size: 15px;
				}
				p {
					margin: 5px 0;
					font-size: 14px;
					color: #666;
				}
				img {
					width: 60%;
				}
			}
		}
		.guess {
			margin-top: 10px;
			background: #fff;
			.guess-title {
				margin: 0 10px;
				border-bottom: 1px solid #ccc;
				height: 40px;
				line-height: 40px;
				font-size: 18px;
			}
		}
	}
</style>
<script type="text/javascript">
	import Item from '../components/item.vue';
	export default {
		components: { Item },
		data() {
			return {
				types: [
					{ text: '美食', img: '01', id: '1'},
					{ text: '电影', img: '02', id: '2'},
					{ text: '酒店', img: '03', id: '3'},
					{ text: '休闲', img: '04', id: '4'},
					{ text: '外卖', img: '05', id: '5'},
					{ text: 'ktv',  img: '06', id: '6'},
					{ text: '周边游', img: '07', id: '7'},
					{ text: '丽人', img: '08', id: '8'},
					{ text: '小吃', img: '09', id: '9'},
					{ text: '火车票', img: '10', id: '10'}
				],
				ad: [],
				list: []
			}
		},
		created() {
			this.$http
				.get("/public/data/home.json")
				.then(({ data }) => {
					this.ad = data.ad;
					this.list = data.list;
					// console.log(this)
				})
		}
	}
</script>
