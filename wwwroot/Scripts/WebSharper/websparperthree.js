(function(Global)
{
 "use strict";
 var websparperthree,Client,websparperthree_Templates,WebSharper,Concurrency,Remoting,AjaxRemotingProvider,UI,Var$1,Templating,Runtime,Server,ProviderBuilder,Handler,TemplateInstance,Client$1,Templates;
 websparperthree=Global.websparperthree=Global.websparperthree||{};
 Client=websparperthree.Client=websparperthree.Client||{};
 websparperthree_Templates=Global.websparperthree_Templates=Global.websparperthree_Templates||{};
 WebSharper=Global.WebSharper;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 Remoting=WebSharper&&WebSharper.Remoting;
 AjaxRemotingProvider=Remoting&&Remoting.AjaxRemotingProvider;
 UI=WebSharper&&WebSharper.UI;
 Var$1=UI&&UI.Var$1;
 Templating=UI&&UI.Templating;
 Runtime=Templating&&Templating.Runtime;
 Server=Runtime&&Runtime.Server;
 ProviderBuilder=Server&&Server.ProviderBuilder;
 Handler=Server&&Server.Handler;
 TemplateInstance=Server&&Server.TemplateInstance;
 Client$1=UI&&UI.Client;
 Templates=Client$1&&Client$1.Templates;
 Client.Main$19$20=function(rvReversed)
 {
  return function(e)
  {
   var _;
   Concurrency.StartImmediate((_=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("websparperthree:websparperthree.Server.DoSomething:1311324235",[e.Vars.Hole("texttoreverse").$1.Get()]),function(a)
    {
     rvReversed.Set(a);
     return Concurrency.Zero();
    });
   })),null);
  };
 };
 Client.Main=function()
 {
  var rvReversed,b,R,_this,t,p,i;
  rvReversed=Var$1.Create$1("");
  return(b=(R=rvReversed.get_View(),(_this=(t=new ProviderBuilder.New$1(),(t.h.push(Handler.EventQ2(t.k,"onsend",function()
  {
   return t.i;
  },function(e)
  {
   var _;
   Concurrency.StartImmediate((_=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("websparperthree:websparperthree.Server.DoSomething:1311324235",[e.Vars.Hole("texttoreverse").$1.Get()]),function(a)
    {
     rvReversed.Set(a);
     return Concurrency.Zero();
    });
   })),null);
  })),t)),(_this.h.push({
   $:2,
   $0:"reversed",
   $1:R
  }),_this))),(p=Handler.CompleteHoles(b.k,b.h,[["texttoreverse",0,null]]),(i=new TemplateInstance.New(p[1],websparperthree_Templates.mainform(p[0])),b.i=i,i))).get_Doc();
 };
 websparperthree_Templates.mainform=function(h)
 {
  Templates.LoadLocalTemplates("main");
  return h?Templates.NamedTemplate("main",{
   $:1,
   $0:"mainform"
  },h):void 0;
 };
}(self));
