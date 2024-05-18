//������������ʱ��� 1583 �� �� 3199 �꣬�������������һ�굽3200ǰһ�꣬3200���Ƿ�Ϊ���������
//ȫ�ֱ���������ʼʱ��ͽ���ʱ���һ�¾Ϳ��Ը������̵���ݷ�Χ������Ϊ�����240��ʱ��Ρ�
var gStartYear = 1924;
var gEndYear = 2164;
//������ʱ���ĸ�ѡ���������Ϸ���
var sYear = document.getElementById("sYear");
//ũ�����·ݡ����Ӷ�����ţ��� 0 ��ʼ����
var sMonth = document.getElementById("sMonth");
var sDay = document.getElementById("sDay");
//Сʱ�Ǵ� -1 �� 22 ��
var sHour = document.getElementById("sHour");
var sMinute = document.getElementById("sMinute");
//ȫ�ֱ�������������صľ��ȡ�γ��
var gBirthJingDu = 120.0;  
var gBirthWeiDu = 38.0;

//��ǰũ����
var gCurNLYear = 2000;  //���浱ǰ��ũ�����
var gCurNongLiYueBiao; //���浱ǰ��ũ���±�
//��ͼ�ؼ�
var syCanvas = document.getElementById("syCanvas");

/**************************************************/
//ũ���ؼ��ĳ�ʼ���Ͷ�̬����
function InitNLYears() //��д��ݺͼ�������
{
    sYear.length = 0;   //��վ��б�
    var strTemp = "";
    for(var i=gStartYear; i<=gEndYear; i++)
    {
        strTemp = String(i) + JiaZi[ GetNianJiaZiShu(i) ];
        addOp(sYear, i, strTemp);
    }
    sYear.selectedIndex = 2000 - gStartYear;
    //��ʼ��
    gCurNLYear = 2000;
    gCurNongLiYueBiao = GetNongLiYueBiao( gCurNLYear );
    //�����·�
    sMonth.length = 0;  //��վ��б�
    for(var i=0; i<gCurNongLiYueBiao.yueCount; i++)
    {
        addOp( sMonth, i, gCurNongLiYueBiao.arrayNames[i] );
    }
    //��ʼ�����
}

function InitNLDays()     //�������ӣ���ʼʱ2000�����´���ʮ��
{
    sDay.length = 0;    //����ɵ��б�
    //addOp(sel,value,text)
    for(var i=0; i<30; i++)
    {
        addOp(sDay, i, NLDayName[i]);
    }
}
//��ݱ仯�������·ݡ����ӣ�ȫ���仯
function OnNLYearChanged()
{
    gCurNLYear = Number( sYear.options[ sYear.selectedIndex ].value );
    gCurNongLiYueBiao =  GetNongLiYueBiao( gCurNLYear );
    //��վɵ��·��б�
    sMonth.length = 0;
    //����µ�
    for(var i=0; i<gCurNongLiYueBiao.yueCount; i++)
    {
        addOp( sMonth, i, gCurNongLiYueBiao.arrayNames[i] );
    }
    sMonth.selectedIndex = 0;
    OnNLMonthChanged(); //�·ݴ��������б�仯
}
//�·ݱ仯���������ӣ�29���30�죬�����ٲ�
function OnNLMonthChanged()
{
    //�ɵļ���
    var oldCount = sDay.length;
    //�µļ���
    var newCount =  gCurNongLiYueBiao.arrayDaysCount[ sMonth.selectedIndex ];
    //����¾����
    if( oldCount == newCount )
    {
        return;
    }
    //��������
    if( 29 < newCount ) //�ɵ�29�죬�µ�30��
    {
        addOp(sDay, 30-1, NLDayName[30-1]); //���� ��ʮ
        return;
    };
    if( oldCount > 29 )//�ɵ�30�죬�µ�29��
    {
        sDay.remove( 30-1 );//ȥ�����
        return;
    } 
}

///////////////////////////////////////////////
/****************
����γ��ѡ���ҳ����ƺ���
****************/
//����ѡ��仯
var sShengFen = document.getElementById("sShengFen"); //ʡ��ѡ���
var sShiXian = document.getElementById("sShiXian"); //����
//���ر仯����¼��γ��
function OnShiXianChange()
{
    var v = new JWdecode( sShiXian.options[sShiXian.selectedIndex].value );
    sShiXian.vJ = v.J; sShiXian.vW = v.W;   //����
    gBirthJingDu = (v.J/Math.PI*180).toFixed(6);    //����
    gBirthWeiDu = (v.W/Math.PI*180).toFixed(6);     //γ��
    //��ӡ���ȱ仯
    //console.log("����: " + gBirthJingDu );
}
//ʡ�ݱ仯
function OnShengFenChange()
{
    sShiXian.length=0; //�������ѡ��
    var i, ob=JWv[ sShengFen.options[sShengFen.selectedIndex].value-0 ];
    for(i=1; i<ob.length; i++)
        addOp( sShiXian, ob[i].substr(0,4), ob[i].substr(4,ob[i].length-4) );
    OnShiXianChange();
}
//��ʼ��ʡ��ѡ���
function InitShengShi()
{
    sShengFen.length = 0;   //���ʡ��ѡ��
    var i;
    for(i=0;i<JWv.length;i++) addOp(sShengFen,i,JWv[i][0]);

    sShengFen.selectedIndex = 0; 
    OnShengFenChange(); //ʡ��
    sShiXian.selectedIndex = 0;
    OnShiXianChange();  //����
}
/*
 * 
tool.js
//��select��option��
function addOp(sel,v,t)
{ 
    //��select�������option
    var Op = document.createElement("OPTION");
    Op.value=v;  Op.text=t;
    sel.add(Op);
}
 */
//���������ı�
var AllText = document.getElementById("AllText");
//
function CalcNLBaZiPanPai()
{
    //����ѡ��
    //�Ա�
    var strGender = document.getElementById("sGender").value;
    // gBirthJingDu ��ȫ�ֱ�����������ȣ������ǳ���ʡ����
    var strBirthShengFen =  (sShengFen.options[sShengFen.selectedIndex]).text;
    var strBirthShiXian = (sShiXian.options[sShiXian.selectedIndex]).text;
    //��̫��ʱ
    var useZTY = Number( document.getElementById("sUseZTY").value );
    //�Ƿ���Ӹ߼�����
    var useJZGaoJi = Number( document.getElementById("sUseJZGaoJi").value );

    //ũ����ݺ��±����Զ����µ� gCurNLYear��gCurNongLiYueBiao
    //��ȡ�����
    var ixYue = Number(sMonth.selectedIndex) ;
    //�����
    var ixRi =  Number(sDay.selectedIndex) ;
    //Сʱ
    var hh = Number( sHour.options[ sHour.selectedIndex ].value );
    //����
    var mm = Number( sMinute.selectedIndex );
    //���ӣ�Ĭ�ϰ� 30 ������
    var ss = 30;
    //���������������
    var birthJD = NongLiDayToJD(gCurNongLiYueBiao, ixYue, ixRi, hh, mm, ss);
    
    //�ж��Ƿ���Ҫ��ͼ
    var bDraw = Number( document.getElementById("sDrawPic").value );
    //console.log(syCanvas); 
    //
    //����Ϊ ���������ա��Ա�ʡ�ݡ����ء��Ƿ���̫�����Ƿ�߼��̣������ľ���
    AllText.innerHTML =  GetGLPaiPanHTML(birthJD, strGender, strBirthShengFen, strBirthShiXian, useZTY, useJZGaoJi, gBirthJingDu
            , bDraw, syCanvas);
    
    //ִ���Զ����Ƶ������壬IE9��Chrome֧�֣�������Բ��С�
    document.execCommand("selectAll");  //ȫѡ
    document.execCommand("copy");       //����
    document.execCommand("unselect");   //��ѡ�� 
}
