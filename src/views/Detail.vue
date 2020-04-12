<template>
<div class="detail">
	<div class="img-part">
		<img :src="'/public/img/item/' + data.src" alt="" v-if="data.src">
		<h1>{{data.title}}</h1>
		<p>{{data.description}}</p>
	</div>
	<div class="price-part">
		<span class="price"><strong>{{data.price}}</strong>元</span>
		<span class="originPrice">门市价{{data.originPrice}}元</span>
		<span class="buy-btn">立即购买</span>
	</div>
    <ul class="list-part">
        <li>支持立即退货</li>
        <li>支持随时退货</li>
        <li>销量{{data.sales}}</li>
    </ul>
    <div class="store-part module">
        <div class="module-header">店家信息</div>
        <div class="module-body">
            <p>{{data.storeName}}</p>
            <p>{{data.storeAddress}}</p>
        </div>
        <div class="module-footer">查看{{data.storeNum}}家分店</div>
    </div>
    <div class="store-part module">
        <div class="module-header">购买须知</div>
        <div class="module-body">
            <h3>有效日期</h3>
            <p>{{data.validateTime}}</p>
            <h3>使用日期</h3>
            <p>{{data.useTime}}</p>
            <h3>使用规则</h3>
            <p v-for="(item, index) in data.rules" :key='index'>{{item}}</p>
        </div>
    </div>
</div>
</template>
<style type="text/css" lang="scss">
@import "../base.scss";
.detail {
	.img-part {
		color: #fff;
		position: relative;
		img {
			width: 100%;
			display: block;
		}
        h1, p {
            position: absolute;
            bottom: 30px;
            left: 27px;
            font-size: 16px;
        }
        h1 {
            bottom: 50px;
            font-size: 24px;
        }
	}
    .price-part {
        background: #fff;
        padding: 0  8px 5px 8px;
        border-bottom: 1px solid #ccc;
        .price {
            color: $navColor;
            strong {
                font-size: 40px;
                font-weight: normal;
            }
        }
        .originPrice {
            margin-left: 5px;
        }
        .buy-btn {
            padding: 9px;
            margin-top: 12px;
            background: #f60;
            color: #fff;
            float: right;
            font-size: 12px;
        }
    }
	.list-part {
		background: #fff;
		@include clearfix;
		padding: 10px 0;
			li {
				box-sizing: border-box;
				color: yellowGreen;
				width: (100%/2);
				float: left;
				padding-left: 10px;
				line-height: 30px;
				height: 30px;
				&:last-child {
				color: #000;
			}
		}
	}
    .module {
        margin-top: 10px;
        padding-top: 10px;
        background-color: #fff;
        .module-header {
            height: 40px;
            line-height: 40px;
            font-size: 25px;
            font-size: 25px;
            margin: 0 10px;
            border-bottom: 1px solid #ccc;
            box-sizing: border-box;
        }
        .module-body {
            padding: 10px 0;
            margin: 0 10px;
            font-size: 15px;
            line-height: 28px;
            border-bottom: 1px solid #ccc;
            h3 {
                color: #f60;
                font-weight: normal;
                padding: 10px 0;
            }
        }
        .module-footer {
            padding: 10px 0;
            margin: 0 10px;
            color: skyblue;
            font-size: 15px;
        }
    }	
}
</style>
<script type="text/javascript">
export default {
	data() {
		return {
			data: {}
		}
	},
	methods: {
		updataData() {
			let { params } = this.$route;
			this.$http
				.get("/public/data/product.json?id=" + { params })
				.then(({ data }) => this.data = data)
		}
	},
	created() {
		this.updataData()
	},
    watch: {
        $route() {
            this.updateData()
        }
    }
}
</script>