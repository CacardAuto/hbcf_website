import{a as p}from"./chunk-5NYYE62Y.js";import{Y as s,ba as a,s as i}from"./chunk-YH4RKDMW.js";var o=class n{constructor(t){this.http=t}newsUrl="assets/data.json";getNews(){return this.http.get(this.newsUrl).pipe(i(t=>t.news))}getNewsById(t){return this.getNews().pipe(i(e=>e.news.find(r=>r.id===t)))}updateLikes(t){return this.http.get(this.newsUrl).pipe(i(e=>{let r=e.news.news.find(c=>c.id===t);return r&&(r.likes+=1,this.http.put(this.newsUrl,e).subscribe()),r}))}static \u0275fac=function(e){return new(e||n)(a(p))};static \u0275prov=s({token:n,factory:n.\u0275fac,providedIn:"root"})};export{o as a};