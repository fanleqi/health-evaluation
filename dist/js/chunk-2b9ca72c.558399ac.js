(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b9ca72c"],{1148:function(e,t,i){"use strict";var n=i("da84"),a=i("5926"),s=i("577e"),o=i("1d80"),r=n.RangeError;e.exports=function(e){var t=s(o(this)),i="",n=a(e);if(n<0||n==1/0)throw r("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(t+=t))1&n&&(i+=t);return i}},"408a":function(e,t,i){var n=i("e330");e.exports=n(1..valueOf)},"50d5":function(e,t,i){"use strict";i("e4ca")},b680:function(e,t,i){"use strict";var n=i("23e7"),a=i("da84"),s=i("e330"),o=i("5926"),r=i("408a"),l=i("1148"),h=i("d039"),u=a.RangeError,g=a.String,d=Math.floor,v=s(l),c=s("".slice),p=s(1..toFixed),f=function(e,t,i){return 0===t?i:t%2===1?f(e,t-1,i*e):f(e*e,t/2,i)},b=function(e){var t=0,i=e;while(i>=4096)t+=12,i/=4096;while(i>=2)t+=1,i/=2;return t},S=function(e,t,i){var n=-1,a=i;while(++n<6)a+=t*e[n],e[n]=a%1e7,a=d(a/1e7)},w=function(e,t){var i=6,n=0;while(--i>=0)n+=e[i],e[i]=d(n/t),n=n%t*1e7},y=function(e){var t=6,i="";while(--t>=0)if(""!==i||0===t||0!==e[t]){var n=g(e[t]);i=""===i?n:i+v("0",7-n.length)+n}return i},L=h((function(){return"0.000"!==p(8e-5,3)||"1"!==p(.9,0)||"1.25"!==p(1.255,2)||"1000000000000000128"!==p(0xde0b6b3a7640080,0)}))||!h((function(){p({})}));n({target:"Number",proto:!0,forced:L},{toFixed:function(e){var t,i,n,a,s=r(this),l=o(e),h=[0,0,0,0,0,0],d="",p="0";if(l<0||l>20)throw u("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return g(s);if(s<0&&(d="-",s=-s),s>1e-21)if(t=b(s*f(2,69,1))-69,i=t<0?s*f(2,-t,1):s/f(2,t,1),i*=4503599627370496,t=52-t,t>0){S(h,0,i),n=l;while(n>=7)S(h,1e7,0),n-=7;S(h,f(10,n,1),0),n=t-1;while(n>=23)w(h,1<<23),n-=23;w(h,1<<n),S(h,1,1),w(h,2),p=y(h)}else S(h,0,i),S(h,1<<-t,0),p=y(h)+v("0",l);return l>0?(a=p.length,p=d+(a<=l?"0."+v("0",l-a)+p:c(p,0,a-l)+"."+c(p,a-l))):p=d+p,p}})},e4ca:function(e,t,i){},f6f8:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"result"},[i("div",{staticClass:"block"},[i("h1",[e._v("身体形态报告")]),i("p",[e._v("您的身体形态为【"+e._s(e.bodyShape)+"】，"+e._s(e.bodyShapeEvaluation)+"。")]),e.waistlineWarn?i("div",[i("h2",[e._v("需要注意的潜在健康问题")]),i("p",[e._v(" 您的腰围在"+e._s(e.waistlineRange)+"（"+e._s(e.gender)+"），属于"+e._s(e.waistlineWarn)+"，心血管风险增加。"),i("br"),e._v(" 身体脂肪的分布与健康有密切的关系。如果脂肪过多地堆积在腰腹部，其患病（如高血压、型糖尿病、高血脂等）的危险性会大大增加。"),i("br")])]):e._e(),i("h2",[e._v("针对您的体型给出的生活建议：")]),i("p",[e._v(" "+e._s(e.bodyShapeSuggestion)+" ")]),i("h2",[e._v("详细解释：")]),i("p",[e._v("bmi指数【"+e._s(e.BMI)+"】")]),i("p",[e._v(" 您的身体质量指数BMI=【"+e._s(e.BMI)+"】kg/㎡，属于【"+e._s(e.BMILevel)+"】，"+e._s(e.BMILevelWarn)+" ")]),i("p",[e._v(" 根据【"+e._s(e.gender)+"】在【"+e._s(e.ageGroup)+"】年龄段范围内的标准，您的体脂处于【"+e._s(e.bodyFatRateLevel)+"】的水平，与BMI指数综合得出您的体型为【"+e._s(e.bodyShape)+"】 ")])])])},a=[],s=(i("b680"),{data:function(){return{bodyShape:null,bodyShapeEvaluation:null,bodyShapeSuggestion:null,waistlineWarn:null,BMI:null,BMILevel:null,BMILevelWarn:null,bodyFatRateLevel:null,gender:null,ageLevel:null,ageGroup:null,waistlineRange:null,ageGroupList:["<=17","18-25","26-35","36-45","46-55","56-65",">=66"],bodyShapeList:["消瘦","低体重","低脂肪肌肉型","标准","低体重高脂肪","运动型","肌肉型超重","超重","临界肥胖","脂肪过量","肥胖"],bodyShapeSuggestionList:["饮食——多注意均衡营养的摄取。运动——增加强化肌力的运动，可帮助体力的训练及体力的增加。","加强肌力训练，多做强化肌力运动，可促进体内新陈代谢。","通常低脂肪肌肉型的人为运动族中的一员，请继续保持运动的习惯，以维持让人羡慕的身材！","体型会随年龄增长及饮食、运动而改变，请注意维持均衡的营养及经常做运动，保持标准的体型~","饮食——均衡地摄取营养，尤其是蛋白质的补充，但应减少高脂肪与甜食的摄取。运动——一方面加强脂肪燃烧，降低体内脂肪量，一方面强化肌力，培养运动习惯，可改善体力不足的问题。","请继续维持固定的运动，避免长时间不运动造成脂肪堆积~","通常本体型的人应属于运动型的人，若能多做燃烧脂肪运动，降低脂肪，体型将更健美~","饮食——应减少高脂肪、高热量的食物，避免营养过剩。运动——加强脂肪燃烧运动。","饮食——应减少高脂肪、高热量的食物，避免营养过剩。运动——加强脂肪燃烧运动。","饮食——应减少高脂肪、高热量的食物，避免营养过剩。运动——加强脂肪燃烧运动。","饮食——由专人指导达到饮食减肥。运动——加强脂肪燃烧运动，每周至少固定三次运动，每回运动时间在30分钟以上。"]}},created:function(){this.getShapeList(),this.getAgeGroup(this.ageLevel-1),this.getBMILevel(this.BMI),this.getBMILevelWarn(this.BMILevel);var e=this.getBodyShapeNum(this.BMILevel,this.bodyFatRateLevel)-1;this.getBodyShape(e),this.getBodyShapeEvaluation(e),this.getBodyShapeSuggestion(e)},methods:{getShapeList:function(){var e=JSON.parse(localStorage.getItem("userInfo"));this.BMI=(e.weight/Math.pow(e.height,2)).toFixed(1),e.bodyFatRate=e.bodyFatRate.toFixed(),this.ageLevel=e.age+1,this.getGender(e.gender),this.bodyFatRateLevel=this.getBodyFatRateLevel(e.gender,this.ageLevel,e.bodyFatRate),this.getWaistWarn(e.gender,e.waistline)},getBMILevel:function(e){this.BMILevel=e<18.5?"偏轻":e<24?"标准":e<28?"超重":"过重"},getAgeGroup:function(e){this.ageGroup=this.ageGroupList[e]},getBodyFatRateLevel:function(e,t,i){return 0===e?1===t?i<=5?"非常低":i<=10?"低":i<=25?"平均":i<=31?"高":"非常高":2===t?i<=7?"非常低":i<=10?"低":i<=13?"偏低":i<=17?"平均":i<=21?"偏高":i<=27?"高":"非常高":3===t?i<=12?"非常低":i<=15?"低":i<=18?"偏低":i<=21?"平均":i<=24?"偏高":i<=29?"高":"非常高":4===t?i<=15?"非常低":i<=18?"低":i<=21?"偏低":i<=24?"平均":i<=26?"偏高":i<=29?"高":"非常高":5===t?i<=17?"非常低":i<=20?"低":i<=23?"偏低":i<=25?"平均":i<=28?"偏高":i<=31?"高":"非常高":6===t?i<=18?"非常低":i<=21?"低":i<=24?"偏低":i<=26?"平均":i<=28?"偏高":i<=31?"高":"非常高":i<=18?"非常低":i<=21?"低":i<=23?"偏低":i<=25?"平均":i<=27?"偏高":i<=30?"高":"非常高":1===t?i<=12?"非常低":i<=15?"低":i<=30?"平均":i<=36?"高":"非常高":2===t?i<=17?"非常低":i<=20?"低":i<=23?"偏低":i<=25?"平均":i<=28?"偏高":i<=32?"高":"非常高":3===t?i<=18?"非常低":i<=21?"低":i<=23?"偏低":i<=26?"平均":i<=30?"偏高":i<=35?"高":"非常高":4===t?i<=19?"非常低":i<=23?"低":i<=26?"偏低":i<=29?"平均":i<=32?"偏高":i<=38?"高":"非常高":5===t?i<=22?"非常低":i<=25?"低":i<=28?"偏低":i<=31?"平均":i<=35?"偏高":i<=38?"高":"非常高":6===t?i<=23?"非常低":i<=27?"低":i<=30?"偏低":i<=33?"平均":i<=36?"偏高":i<=38?"高":"非常高":i<=21?"非常低":i<=26?"低":i<=29?"偏低":i<=32?"平均":i<=35?"偏高":i<=38?"高":"非常高"},getBodyShapeNum:function(e,t){return"偏轻"===e?"非常低"===t||"低"===t?1:"偏低"===t||"平均"===t?2:5:"标准"===e?"非常低"===t||"低"===t?3:"偏低"===t||"平均"===t?4:"偏高"===t||"高"===t?10:11:"超重"===e?"非常低"===t?6:"低"===t||"偏低"===t?7:"平均"===t?8:"偏高"===t?9:11:"非常低"===t||"低"===t||"偏低"===t?6:"平均"===t?9:11},getWaistWarn:function(e,t){0===e?t>=85&&t<90?(this.waistlineWarn="向心性肥胖前期",this.waistlineRange="85-90之间"):t>=90&&(this.waistlineWarn="向心性肥胖",this.waistlineRange="大于等于90"):t>=80&&t<85?(this.waistlineWarn="向心性肥胖前期",this.waistlineRange="80-85之间"):t>=85&&(this.waistlineWarn="向心性肥胖",this.waistlineRange="大于等于85")},getBodyShape:function(e){this.bodyShape=this.bodyShapeList[e]},getBodyShapeEvaluation:function(e){this.bodyShapeEvaluation=3===e||4===e||6===e||7===e?"处于健康的范围内":2===e||8===e||9===e?"距离健康的体型仍有一定的距离":"需要警惕"},getBodyShapeSuggestion:function(e){this.bodyShapeSuggestion=this.bodyShapeSuggestionList[e]},getBMILevelWarn:function(e){this.BMILevelWarn="超重"===e||"过重"===e?"增加了患脂肪肝、糖尿病及其他慢性病的风险。均衡饮食+合理运动是控制体重的唯一健康有效方式~":"标准"===e?"处于正常范围，请继续均衡饮食+合理运动~":"体重过轻，影响体质，可能导致免疫力低下、月经不调或闭经、骨质疏松、贫血、抑郁等病症哦！"},getGender:function(e){this.gender=0===e?"男性":"女性"}}}),o=s,r=(i("50d5"),i("2877")),l=Object(r["a"])(o,n,a,!1,null,"49c70f2e",null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2b9ca72c.558399ac.js.map