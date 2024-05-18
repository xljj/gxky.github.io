//������������ʱ��� 1583 �� �� 3199 �꣬�������������һ�굽3200ǰһ�꣬3200���Ƿ�Ϊ���������
//ȫ�ֱ���������ʼʱ��ͽ���ʱ���һ�¾Ϳ��Ը������̵���ݷ�Χ������Ϊ�����240��ʱ��Ρ�
var gStartYear = 1924;
var gEndYear = 2164;
//ȫ�ֱ�������������صľ��ȡ�γ��
var gBirthJingDu = 120.0;  
var gBirthWeiDu = 38.0;
//��ǰ�Ƿ�ʹ��ũ��ʱ��
var gbUseNongLi = false;

//�����ؼ�
var sGGYear = document.getElementById("sGGYear");
var sGGMonth = document.getElementById("sGGMonth");
var sGGDay = document.getElementById("sGGDay");
var sGGHour = document.getElementById("sGGHour");
var sGGMinute = document.getElementById("sGGMinute");

//ũ���ؼ�
var sNNYear = document.getElementById("sNNYear");
//ũ�����·ݡ����Ӷ�����ţ��� 0 ��ʼ����
var sNNMonth = document.getElementById("sNNMonth");
var sNNDay = document.getElementById("sNNDay");
//Сʱ�Ǵ� -1 �� 22 ��
var sNNHour = document.getElementById("sNNHour");
var sNNMinute = document.getElementById("sNNMinute");

/////////////////////////////////////////////////////////////////
//������ũ���ؼ��л�
var rdTimeGG = document.getElementById("rdTimeGG");//������ѡ��ť
var rdTimeNN = document.getElementById("rdTimeNN");//ũ����ѡ��ť
function OnGLNLChanged()
{
    if( rdTimeGG.checked )//ʹ�ù���
    {
        gbUseNongLi = false;
        //���ù����ؼ�
        sGGYear.disabled = false;
        sGGMonth.disabled = false;
        sGGDay.disabled = false;
        sGGHour.disabled = false;
        sGGMinute.disabled = false;
        
        //����ũ���ؼ�
        sNNYear.disabled = true;
        sNNMonth.disabled = true;
        sNNDay.disabled = true;
        sNNHour.disabled = true;
        sNNMinute.disabled = true;
    }
    else //ʹ��ũ��
    {
        gbUseNongLi = true;
        //���ù����ؼ�
        sGGYear.disabled = true;
        sGGMonth.disabled = true;
        sGGDay.disabled = true;
        sGGHour.disabled = true;
        sGGMinute.disabled = true;
        
        //����ũ���ؼ�
        sNNYear.disabled = false;
        sNNMonth.disabled = false;
        sNNDay.disabled = false;
        sNNHour.disabled = false;
        sNNMinute.disabled = false;
    }
}


/////////////////////////////////////////////////////////////////
//����ʱ�䶯̬����
//function addOp(sel,value,text)  //��select�������option
//��ʼ����2000��12��12��
function InitGGYears()    //��ʼ��ʱһ���Ե���
{
    //��վɵ�ѡ��
    sGGYear.length = 0; 
    for(var i=gStartYear; i<=gEndYear; i++)
    {
        addOp(sGGYear, i, String(i) );
    }
    //Ĭ��ѡ��2000��
    sGGYear.selectedIndex = 2000 - gStartYear;
}
//��ʼ��2000��12�·�
function InitGGDays() //��ʼ��ʱһ���Ե���
{
    //��վɵ�һ��ѡ��
    sGGDay.length = 0;
    //��ӣ�2000��12��
    var nCount = 31;
    for(var i=1; i<=nCount; i++)
    {
        addOp(sGGDay, i, String(i) );
    }
    sGGDay.selectedIndex = 12 - 1 ;//12��12��
}

//����ƽ��ÿ������
var gGLDaysInMonth = new Array
   (31, 28, 31, 30,
    31, 30, 31, 31,
    30, 31, 30, 31);
//���ݹ�����ݡ��·ݻ�֪���µ����� 
function GetGLDaysCountByYearAndMonth(year, month)
{
    if(month != 2)
    {
        //����2�£���������
        return gGLDaysInMonth[month - 1];        
    };
    //������2�£��ж��Ƿ�����
    if( IsGLRunNian(year) )
    {
        return 29;
    }
    else
    {
        return 28;
    }
}//
//�жϹ������꣬���������
function IsGLRunNian(year)
{
    if( (year % 4) != 0 )
    {
        //������
        return false;
    };
    //��4������
    if( (year % 100) == 0 )//��100����
    {
        if( (year%400) == 0 )//��400����
        {
            return true;
        }
        else//����400����
        {
            return false;
        }
    }
    else//����100��������4����
    {
        return true;
    }
}

//������ݱ仯�������Ƿ��������
function OnGGYearChanged()
{
    //��ݱ仯ֻӰ��2��
    var curYear = sGGYear.value;
    var curMonth = sGGMonth.value;
    if(curMonth != 2)
    {
        return; //����2��
    }
    //��2��
    var oldDaysCount = sGGDay.length;
    var newDaysCount = GetGLDaysCountByYearAndMonth(curYear, curMonth);
    if( oldDaysCount == newDaysCount )
    {
        //�ɵ��������µ�����û�䣬����Ҫ�Ķ�
        return;
    }
    //�����б仯
    if( oldDaysCount > newDaysCount )//�ɵ���29�죬�µ���28��
    {
        sGGDay.remove(29 - 1);    //�Ƴ�ĩβ��29��
    }
    else//�ɵ�28�죬�µ�29��
    {        
        addOp(sGGDay, 29, "29" );//����29��value�� "29" ��text
    }
}
//�����·ݱ仯�������Ƿ��������
function OnGGMonthChanged()
{
    var curYear = sGGYear.value;
    var curMonth = sGGMonth.value;
    //����������������
    //�ɵ�������ȫ���Ƴ���
    var oldCount = sGGDay.length;
    var newCount =  GetGLDaysCountByYearAndMonth(curYear, curMonth);
    //�������һ�����ñ仯
    if( oldCount == newCount )
    {
        return;
    }
    //�¾�������һ���������ٲ�
    if( oldCount > newCount )
    {
        //���˵�ɾ��
        for(var i=oldCount; i>newCount; i--)
        {
            sGGDay.remove( i-1 );
        }
    }
    else
    {
        //���˲���
        for(var i=oldCount+1; i<=newCount; i++)
        {
            addOp(sGGDay, i, String(i) );
        }
    }
}

/////////////////////////////////////////////////////////////////
//ũ��ʱ�䶯̬���£�ũ�����·ݡ����Ӷ������
//��ǰũ����
var gCurNLYear = 2000;  //���浱ǰ��ũ�����
var gCurNongLiYueBiao; //���浱ǰ��ũ���±�
//����2000�� 12 �� 12 �ţ���Ӧũ�� ʮһ�´� ʮ��
function InitNNYears() //��д��ݺͼ�������
{
    sNNYear.length = 0;   //��վ��б�
    var strTemp = "";
    for(var i=gStartYear; i<=gEndYear; i++)
    {
        strTemp = String(i) + JiaZi[ GetNianJiaZiShu(i) ];
        addOp(sNNYear, i, strTemp);
    }
    sNNYear.selectedIndex = 2000 - gStartYear;
    //��ʼ��
    gCurNLYear = 2000;
    gCurNongLiYueBiao = GetNongLiYueBiao( gCurNLYear );
    //�����·�
    sNNMonth.length = 0;  //��վ��б�
    for(var i=0; i<gCurNongLiYueBiao.yueCount; i++)
    {
        addOp( sNNMonth, i, gCurNongLiYueBiao.arrayNames[i] );
    }
    //����ũ��ʮһ�£�2000��ũ��������
    sNNMonth.selectedIndex = 11 - 1 ; //ũ��ʮһ��
}

function InitNNDays()     //�������ӣ���ʼʱ2000��ʮһ�´���ʮ��
{
    sNNDay.length = 0;    //����ɵ��б�
    //addOp(sel,value,text)
    for(var i=0; i<30; i++)
    {
        addOp(sNNDay, i, NLDayName[i]);
    }
    sNNDay.selectedIndex = 17 - 1 ; //ũ��ʮ��
}
//��ݱ仯�������·ݡ����ӣ�ȫ���仯
function OnNNYearChanged()
{
    gCurNLYear = Number( sNNYear.options[ sNNYear.selectedIndex ].value );
    gCurNongLiYueBiao =  GetNongLiYueBiao( gCurNLYear );
    //��վɵ��·��б�
    sNNMonth.length = 0;
    //����µ�
    for(var i=0; i<gCurNongLiYueBiao.yueCount; i++)
    {
        addOp( sNNMonth, i, gCurNongLiYueBiao.arrayNames[i] );
    }
    sNNMonth.selectedIndex = 0;
    OnNNMonthChanged(); //�·ݴ��������б�仯
}
//�·ݱ仯���������ӣ�29���30�죬�����ٲ�
function OnNNMonthChanged()
{
    //�ɵļ���
    var oldCount = sNNDay.length;
    //�µļ���
    var newCount =  gCurNongLiYueBiao.arrayDaysCount[ sNNMonth.selectedIndex ];
    //����¾����
    if( oldCount == newCount )
    {
        return;
    }
    //��������
    if( 29 < newCount ) //�ɵ�29�죬�µ�30��
    {
        addOp(sNNDay, 30-1, NLDayName[30-1]); //���� ��ʮ
        return;
    };
    if( oldCount > 29 )//�ɵ�30�죬�µ�29��
    {
        sNNDay.remove( 30-1 );//ȥ�����
        return;
    } 
}

//////////////////////
//�������
var sShengNian = document.getElementById("sShengNian");
function InitChuShengNianFen()
{
    //��վɵ�ѡ��
    sShengNian.length = 0; 
    for(var i=gStartYear; i<=gEndYear; i++)
    {
        addOp(sShengNian, i, String(i) + JiaZi[ GetNianJiaZiShu(i) ] );
    }
    //Ĭ��ѡ��1990��
    sShengNian.selectedIndex = 1990 - gStartYear;
}
///////////////////////
 function FillCurTime() //�Զ���䵱ǰʱ�䣬�����ĸ��¡�ũ��һ��ֻ���ڳ���ʱ���������ԣ��������á�
 {
    var curTime = new Date();
    var year = curTime.getFullYear();
    var month = curTime.getMonth(); //JS�·���0��11
    var day = curTime.getDate();    //getDate�����ӣ�getDay�����ڼ�
    var hour = curTime.getHours();
    var minute = curTime.getMinutes();
    //���ÿؼ�
    sGGYear.selectedIndex = year - gStartYear;
    //��ݱ仯
    OnGGYearChanged();    
    sGGMonth.selectedIndex = month;
    //�·ݱ仯
    OnGGMonthChanged();
    //�������Ӻ�Сʱ
    sGGDay.selectedIndex = day - 1;
    sGGHour.selectedIndex = hour;
    sGGMinute.selectedIndex = minute;
 }
/////////////////////////////////////////////////////////////////
//���������ı�
var AllText = document.getElementById("AllText");
//����
function CalcLiuYaoPanPai()
{
    //����ʱ������Ű���
    var bzpp;
    if(gbUseNongLi)
    {
        //ʹ��ũ��ʱ������
        bzpp = GetNNTimeBZPP();
    }
    else
    {
        //ʹ�ù���ʱ���������
        bzpp = GetGGTimeBZPP();
    }
    //���ɻ�������س�����������顢�������飬�������ϣ����0��5
    var lyBasic = GetLiuYaoBasicObjectSGYG();//�ֹ�ҡ��
    //�������ռ�¡��Ա𡢳������
    lyBasic.strZhanShi = document.getElementById("tZhanShi").value;
    lyBasic.strGender = document.getElementById("sGender").value;
    lyBasic.strShengNian = sShengNian.options[sShengNian.selectedIndex].text;
    //���Է�ʽ
    lyBasic.strQiGuaFangShi = "�ֹ�Ǯ��ҡ��";//�ֹ�ҡ��
    
    //���ݰ��ֶ�����س������������������س����
    var lypp = GenFullLiuYaoPaiPan(bzpp, lyBasic);
    //���������ַ���    
    if( lypp.bQuanJingGua )
    {
        //ȫ����
        AllText.innerHTML = GetLiuYaoHTMLQuanJingGua(bzpp, lypp);
        //AllText.innerHTML = Get64GuaHTML();//64��һ��
    }
    else
    {
        //�������Ժͱ����Ű�
        AllText.innerHTML = GetLiuYaoHTML(bzpp, lypp);
    }
    
    //ִ���Զ����Ƶ������壬IE9��Chrome֧�֣�������Բ��С�
    document.execCommand("selectAll");  //ȫѡ
    document.execCommand("copy");       //����
    document.execCommand("unselect");   //��ѡ�� 
}

//����ʱ������
function GetGGTimeBZPP()
{    
    var myJD = JD;
    myJD.Y = Number(sGGYear.value);
    myJD.M = Number(sGGMonth.value);
    myJD.D = Number(sGGDay.value);
    myJD.h = Number(sGGHour.value);
    myJD.m = Number(sGGMinute.value);
    myJD.s = 30;  //Ĭ����30�������
    //������
    var birthTime = myJD.toJD();
    var bzpp =  CalcBaZiObject(birthTime, "��", 120, 0);//��Ů����û����ֻҪ����
    return bzpp;
}

//ũ��ʱ������
function GetNNTimeBZPP()
{
    //��ȡũ��ʱ����Ϣ
   var ixYue = Number( sNNMonth.selectedIndex ); //����
   var ixRi = Number( sNNDay.selectedIndex );    //����
   var hh = Number( sNNHour.options[ sNNHour.selectedIndex ].value );//Сʱ -1 �� 22
   var mm = Number( sNNMinute.selectedIndex ); //���� 0 �� 59
   var ss = 30;  //Ĭ�ϰ�30��
   //����������
   var birthTime = NongLiDayToJD(gCurNongLiYueBiao, ixYue, ixRi, hh, mm, ss);
   var bzpp =  CalcBaZiObject(birthTime, "��", 120, 0);//��Ů����û����ֻҪ����
   return bzpp;
}

//lyBasic.arrYinYang ��������6��Ԫ��
//lyBasic.arrDongJing ��������6��Ԫ��
//        �ֹ�س�����飬����0������1������2������3
//lyBasic.arrShouGongYao 6��Ԫ��
//�����ֶ�ҡ�����Σ����ɻ�����س����
 function GetLiuYaoBasicObjectSGYG()
 {
    //��������
    var lyBasic = new Object();
    //��������
    lyBasic.arrYinYang = new Array(6);
    //��������
    lyBasic.arrDongJing = new Array(6);
    //�ֹ�س�����飬����0������1������2������3
    lyBasic.arrShouGongYao = new Array(6);
    //��ʼ��Ϊ0
    for(var i=0; i<6; i++)
    {
        lyBasic.arrYinYang[i] = 0;
        lyBasic.arrDongJing[i] = 0;
        lyBasic.arrShouGongYao[i] = 0;
    }
    //��ȡ6���ֹ�س
    lyBasic.arrShouGongYao[0] = document.getElementById("sLY1").value ;
    lyBasic.arrShouGongYao[1] = document.getElementById("sLY2").value ;
    lyBasic.arrShouGongYao[2] = document.getElementById("sLY3").value ;
    lyBasic.arrShouGongYao[3] = document.getElementById("sLY4").value ;
    lyBasic.arrShouGongYao[4] = document.getElementById("sLY5").value ;
    lyBasic.arrShouGongYao[5] = document.getElementById("sLY6").value ;
    //�ֹ�س�����������顢��������
    for(var i=0; i<6; i++)
    {
        //0������1����
        lyBasic.arrYinYang[i] = lyBasic.arrShouGongYao[i] % 2;
        lyBasic.arrDongJing[i] = Math.floor(lyBasic.arrShouGongYao[i] / 2);
    }
    //����
     return lyBasic;
 }
 
 