//���������Ҫʱ�䣬���﴿���Ǽ�ʱ�õ�
//������������ʱ��� 1583 �� �� 3199 �꣬�������������һ�굽3200ǰһ�꣬3200���Ƿ�Ϊ���������
//ȫ�ֱ���������ʼʱ��ͽ���ʱ���һ�¾Ϳ��Ը������̵���ݷ�Χ������Ϊ�����240��ʱ��Ρ�
var gStartYear = 1924;
var gEndYear = 2164;

//�����ؼ�
var sGGYear = document.getElementById("sGGYear");
var sGGMonth = document.getElementById("sGGMonth");
var sGGDay = document.getElementById("sGGDay");
var sGGHour = document.getElementById("sGGHour");
var sGGMinute = document.getElementById("sGGMinute");

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
 function FillCurTime() //�Զ���䵱ǰʱ�䣬�����ĸ��¡�
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
 ////////////////////////////////////////
 //���7��ѡ��������
 function InitSels()
 {
     for(var i=0; i<7; i++)
     {
         var curID = "sQXJ" + String(i);
         var curSel = document.getElementById(curID);
         curSel.length = 0; //���ѡ���
         //�������
         for(var j=0; j<7; j++)
         {
             addOp(curSel, j, ArrayQiXingNames[j]);
         }
         curSel.selectedIndex = -1; //��ѡ���κο���
     }
 }
 
 //���Ʊ仯ʱ��ͼƬ���ű�
 function OnCardSelectionChange(objSel, nPic)
 {
     var ix = objSel.selectedIndex; //ѡ�е����
     if(ix<0 || ix>6) //���Ǵ�0��6
     {
         return;    //�Ƿ��Ĳ�����
     }
     //��ȡͼƬ����
     var objPic = document.getElementById( "pic" + String(nPic) );
     //����ͼƬ�ļ���
     var strPicSrc = "qixing/" + String(ix) + ".png" ;
     //����ͼƬԴ�ļ�
     objPic.src = strPicSrc;
 }
 
/////////////////////////////////////////////////////////////////
//���������ı�
var AllText = document.getElementById("AllText");
//����
function CalcQiXingPanPai()
{
    //�����߸��������
    var arrJue = new Array(7);
    //ȡ������ţ�������Ƿ��ظ�
    for(var i=0; i<7; i++)
    {
        var curID = "sQXJ" + String(i);
        arrJue[i] =  document.getElementById(curID).selectedIndex;
        if( arrJue[i] < 0 || arrJue[i] > 6 ) //����0��6
        {
            alert("��ѡ����ȷ�������������߸������ظ���Ҫ����ȡ˳���");
            return;
        };
        //����ظ�
        if( CheckDuplicate(arrJue, i) ) //���ظ�
        {
            alert( "��"+ String(i+1) + "��ֽ��������ǰ����ظ��������ظ���һ���ƣ�" );
            return;
        }
    }
    //�Ѿ���ȡ��7������˳��
    //����7��ѡ���ֻ��
    for(var i=0; i<7; i++)
    {
        var curID = "sQXJ" + String(i);
        var curSel = document.getElementById(curID);
        curSel.disabled = true;
    }
    //ʹ�ù���ʱ���������
    var bzpp = GetGGTimeBZPP();
    //�������Ǿ�����
    var qxjObj = new Object();
    qxjObj.bzpp = bzpp;
    qxjObj.arrJue = arrJue;
    //�������Ǿ����̶���
    SetQXJObject(qxjObj);
    
    //���±���������ַ���
    UpdateTableQXStrs(qxjObj);
    
    //���������ı�
    AllText.innerHTML = GetQiXingPanPaiHTML(qxjObj);
    
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

//ÿ�ζ�ȡһ���������ж���ǰ����Ƿ��ظ�
//������ظ�������  false���ظ����� true
function CheckDuplicate(arrJue, ix)
{
    var count = arrJue.length;
    if( ix<0  || ix>=count )
    {
        return false;    //����û�ظ�
    }
    //��� ix �����ǰ����Ƿ��ظ�
    for(var k=0; k<ix; k++)
    {
        if( arrJue[k] != arrJue[ix] )
        {
            //û�ظ��������һ��
            continue;
        }
        else //������ȣ��������һ��
        {
            return true; //��鵽�ظ�
        }
    }
    //û�鵽�ظ�
    return false;
}
/**
    qxjObj.bzpp //��������
    qxjObj.arrJue //���Ǿ�˳��
 */
 function SetQXJObject(qxjObj)
 {
     /////////////////////////////////////////////////
     /*1���ܸ٣��ж���ʱ����ͼ���ǵ����С���˥��˳���*/
     //����ʱ
     qxjObj.TianShiWX = CalcTianShi( qxjObj.bzpp.iRiJZ, qxjObj.bzpp.iShiJZ );
     //��ʱͼ
     qxjObj.curJueShiTu = JueShiXingTuArray[qxjObj.TianShiWX];
     //��ͼ����������
     qxjObj.arrQXWuXing = new Array(7);
     for(var i=0; i<7; i++)
     {
         if( qxjObj.arrJue[i] > 1 ) //�����������
         {
             qxjObj.arrQXWuXing[i] = ArrayQiXingWuXing[ qxjObj.arrJue[i] ];
         }
         else//�������
         {
             qxjObj.arrQXWuXing[i] = qxjObj.TianShiWX;  //ͬ��ʱ����
         }
     }
     //����ǿ��ֱ�Ӳ�ѯÿ������ curJueShiTu[] �е���ž��У�0��������6������
     qxjObj.arrQXQiangRuoIndexs = new Array(7);
     for(var i=0; i<7; i++)
     {
         qxjObj.arrQXQiangRuoIndexs[i] = qxjObj.curJueShiTu.indexOf( qxjObj.arrJue[i] );
     }
     //˳������ж�
     qxjObj.typeShunNi = GetShunNiType( qxjObj );
     //����λ�ã������Լ���0����Ŵ��㿪ʼ�ģ������357������246
     qxjObj.posTianShu = qxjObj.arrJue.indexOf(0);
     
     //��̫һ��ͼ������
     qxjObj.arrTaiYiYiXing = new Array(7);
     for(var i=0; i<7; i++)
     {
         if( qxjObj.arrJue[i] != TaiYiXingTu[i] ) //������
         {
             qxjObj.arrTaiYiYiXing[i] = 1; 
         }
         else
         {
             qxjObj.arrTaiYiYiXing[i] = 0; //̫һͬ��
         }
     }
     //�Ƿ���̫һȫ�죬���������ȫ����
     if( CalcArraySum( qxjObj.arrTaiYiYiXing ) >= 7 )
     {
         qxjObj.bTaiYiQuanYi = true;
     }
     else
     {
         qxjObj.bTaiYiQuanYi = false;
     }
     
     //���ʱ��ͼ��ͬ��
     qxjObj.arrJueShiTongXing = new Array(7);
     for(var i=0; i<7; i++)
     {
         if( qxjObj.arrJue[i] != qxjObj.curJueShiTu[i] ) //����ͬ��
         {
             qxjObj.arrJueShiTongXing[i] = 0;
         }
         else //��ʱͬ��
         {
            qxjObj.arrJueShiTongXing[i] = 2; //��2�����淽���
         }
     }
     //�Ƿ����ʱͼȫ��
     if( CalcArraySum(qxjObj.arrJueShiTongXing) < 1 ) //û����ͬ��
     {
         qxjObj.bJueShiQuanYi = true; //ȫ����
     }
     else
     {
         qxjObj.bJueShiQuanYi = false;
     }
     
     //����ͬ�츴��
     qxjObj.arrTongYiFuXing = new Array(7);
     for(var i=0; i<7; i++)
     {
         qxjObj.arrTongYiFuXing[i] =  qxjObj.arrTaiYiYiXing[i] + qxjObj.arrJueShiTongXing[i];
     }

     return; //�������
 }
 //�������Ǿ����󣬸��±���е������ı����ܸ��ı�
 function UpdateTableQXStrs(qxjObj)
 {
     //�ܸٶ���
     var otZongGang = document.getElementById("textZongGang");
     //�����ܸ��ı�
     var strZongGang = "<b>��ͼ�ܸ�</b><br>";
     var strTemp = "";
     //��ʱ
     strZongGang += "<b>��ʱ��" + WuXing[ qxjObj.TianShiWX ] + "</b><br>";
     //˳���
     strZongGang += QXJLeiXing[ qxjObj.typeShunNi ] + "<br>";
     //����λ�ã�357��Ϊ246
     if(   2 == qxjObj.posTianShu
        || 4 == qxjObj.posTianShu
        || 6 == qxjObj.posTianShu )
    {
        strTemp = "<span style='color: red; font-weight: bold;'>������"
                + String( qxjObj.posTianShu+1 ) + "</span><br>" ;
        strZongGang += strTemp;
    }
     
     //����ȫ���ж�
     if( qxjObj.bTaiYiQuanYi ) //̫һȫ��
     {
         strTemp = "<span style='color: red; font-weight: bold;'>̫һ��ͼȫ��"
                + "</span><br>" ;
        strZongGang += strTemp;
     };
    if( qxjObj.bJueShiQuanYi ) //��ʱȫ��
     {
         strTemp = "<span style='color: red; font-weight: bold;'>��ʱ��ͼȫ��"
                + "</span><br>" ;
        strZongGang += strTemp;
     };
     //�����ܸ�
     otZongGang.innerHTML = strZongGang;
     
     //�������ǵ��ı�
     var baseIDText = "textQXJ";
     for(var i=0; i<7; i++)
     {
         var curID = baseIDText + String(i);
         //����
         var curObjText = document.getElementById(curID);
         //�ı�
        var curXingHTML = "";
         //ǿ���ж�
        strTemp = ArrayQiangRuo[ qxjObj.arrQXQiangRuoIndexs[i] ];  
        strTemp = PackQXWXText(strTemp,  qxjObj.arrQXWuXing[i] );
        if( 3 == qxjObj.arrQXWuXing[i] ) //��ɫ������
        {
            strTemp = "<span style='background-color:  #0000FF;'>" + strTemp + "</span>";
        }
        curXingHTML += strTemp;
        //���ǡ�ͬ���ж�
        curXingHTML += "<br>";
        curXingHTML += QXTongYiStrs[ qxjObj.arrTongYiFuXing[i] ];

        //���������ı�
        curObjText.innerHTML = curXingHTML;
     }
 }
 
//����������ʱ����������ʱ����
function CalcTianShi( iRiJZ, iShiJZ )
{
    //��֧��ʱ֧
    var nRiZhi = iRiJZ % 12;
    var nShiZhi = iShiJZ % 12;
    //����
    var riWX = DiZhiChaWuXing[nRiZhi];
    var shiWX = DiZhiChaWuXing[nShiZhi];
    //���� �� ľ0 ��1 ��2 ��3 ˮ4
    if( riWX+0 == shiWX  ) //ͬ����
    {
        return riWX;
    }
    else if( (riWX+1)%5 == shiWX) //����ʱ
    {
        return shiWX;   //ľ���𣬵û�
    }
    else if( (riWX+2)%5 == shiWX ) //ľ��������ľ
    {
        return riWX;
    }
    else if( (riWX+3)%5 == shiWX ) //ľ�����
    {
        return shiWX;
    }
    else //riWX+4 ����ľ��ʱˮ
    {
        return riWX;
    }
}
/*  
  "��ͨ��",//0
  "˳���",//1
  "�����",//2
  "˳ʱ��",//3
  "��ʱ��" //4 */
function GetShunNiType( qxjObj )
{
    //̫һ��ͼ
    var curTY = TaiYiXingTu;
    //��ʱ��ͼ
    var curJS = qxjObj.curJueShiTu;
    
    //˳����ж�
    var isShunTian = true; //�ȼٶ���˳��
    for(var i=0; i<7; i++ )
    {
        if( curTY[i] != qxjObj.arrJue[i] )//����в�ͬ�ľͲ���˳��
        {
            isShunTian = false;
            break; //ֹͣ��
        }
    }
    if( isShunTian ) return 1; //˳��ַ���

    ///////////////////
    //������ж�
    var isNiTian = true;//�ٶ�����
    for(var i=0; i<7; i++)
    {
        if( curTY[6-i] != qxjObj.arrJue[i] )//����в�ͬ�ľͲ�������
        {
            isNiTian = false;
            break; //ֹͣ��
        }
    }
    if( isNiTian ) return 2;   //����ַ���

    ////////////////////////////////////////
    //˳ʱ���ж�
    var isShunShi = true; //�ٶ�˳ʱ
    for(var i=0; i<7; i++)
    {
        if( curJS[i] != qxjObj.arrJue[i] ) //�в�ͬ�ģ�����˳ʱ
        {
            isShunShi = false;
            break; //ֹͣ���
        }
    }
    if( isShunShi ) return 3;  //˳ʱ�ַ���3    

    ////////////////////////////////////////
    //��ʱ���ж�
    var isNiShi = true; //�ٶ���ʱ
    for(var i=0; i<7; i++)
    {
        if( curJS[6-i] != qxjObj.arrJue[i] ) //�в�ͬ�ģ�������ʱ
        {
            isNiShi = false;
            break;
        }
    }
    if( isNiShi ) return 4;  //��ʱ�ַ��� 4   

    //���û��
    return 0; 
}

//�������Ǿ������������̵��ı�
function GetQiXingPanPaiHTML(qxjObj)//�����߸�
{
    //����ַ���
    var strRet = "<br><div align=\"left\" style=\"line-height: 18pt; font-family: ����;\">"; 
    var strTemp = "";
    var curJD = qxjObj.bzpp.JDBirth; //���Ե�������ʱ��
    
    //ռ��
    strTemp = document.getElementById("tZhanShi").value;
    strRet += "��ռ���飺" + strTemp + "<br>";
    //�����ʽ
    strRet += "�����ʽ���ֹ���ȡ����<br>";
    //�����Ա�����
    strTemp = "�����Ա�" + document.getElementById("sGender").value
        + "�� ���꣺" + sShengNian.options[sShengNian.selectedIndex].text;
    strRet += strTemp + "<br>";  
    //����ʱ��
    strRet += GetGGTimeStr(curJD) + "<br>";
    //ũ��ʱ��
    strRet += GetNNTimeStr(curJD) + "<br>";
    //�����֧�ַ���
    strTemp = "��֧��" + GetBoldText( JiaZi[qxjObj.bzpp.iNianJZ] ) + "��"
        + "��" + GetBoldText(  JiaZi[qxjObj.bzpp.iYueJZ] ) + "��" 
        + "��" + GetFuchsiaText(GetBoldText( JiaZi[ qxjObj.bzpp.iRiJZ ] )) 
        + "�ա�" 
        + GetFuchsiaText(GetBoldText( JiaZi[ qxjObj.bzpp.iShiJZ ] ))
        + "ʱ" ;
    strRet += strTemp + "<br><br>" ;
    ////////////////////////////////////////////////
    //�ܸ�
    strRet += "<b>һ����ͼ�ܸ�</b><br>";
    //��ʱ
    strRet += "<b>��ʱ��" +  WuXing[qxjObj.TianShiWX] + "</b><br>";
    //˳�桢��ͨ������
    strRet += "<b>" +  QXJLeiXing[ qxjObj.typeShunNi ] 
             + QXJLeiXingMiaoShu[qxjObj.typeShunNi] + "</b><br>";
    //�����ǵ�λ�ã�ԭ��357���������Ϊ246
    if(     2 == qxjObj.posTianShu
         || 4 == qxjObj.posTianShu
         || 6 ==  qxjObj.posTianShu)
    {
        strTemp = "������" + String( qxjObj.posTianShu + 1 )
            + "�����������գ��ⲡ������޵����⡣";
        strTemp =  GetBoldText( GetRedText(strTemp) );
        strRet += strTemp + "<br>" ;
    }
    //˳���˳ʱ��һ�㲻�����ǡ�ͬ��
    //˳��1��˳ʱ3
    if( 1 == qxjObj.typeShunNi || 3 == qxjObj.typeShunNi )
    {
        //��̫һȫ���ж�
        if(qxjObj.bTaiYiQuanYi)
        {
            strRet += "��̫һ��ͼȫ�죺������˳����<br>" ;
        }
        if(qxjObj.bJueShiQuanYi)
        {
            strRet += "���ʱ��ͼȫ�죺������˳����<br>" ;
        }
    }
    else
    {
        //̫һȫ��;�ʱȫ��
         if(qxjObj.bTaiYiQuanYi)
        {
            strRet += GetBoldText(GetRedText("��̫һ��ͼȫ�죺��Υ��������²�����С���޷���<br>")) ;
        }
        if(qxjObj.bJueShiQuanYi)
        {
            strRet += GetBoldText(GetRedText("���ʱ��ͼȫ�죺������ʱ�����²�����С���޷���<br>")) ;
        }
    }
    strRet += "<br>";
    /////////////////////////////////////
    //��ʼ������������
    strRet += "<b>��������˳���ǿ��</b>��4�šＰ����Ϊǿ������Ϊ����<br>";
    var strT2 = "";
    for(var i=0; i<7; i++)
    {
        //����
        strTemp = String(i+1) + "��" + ArrayQiXingNames[ qxjObj.arrJue[i] ] + "��������";        
        //����
        strTemp += ArrayQXWXPrefixStrs[ qxjObj.arrJue[i] ] + WuXing[qxjObj.arrQXWuXing[i]];
        //ǿ��
        strT2 = PackQXWXText(ArrayQiangRuo[ qxjObj.arrQXQiangRuoIndexs[i] ],  qxjObj.arrQXWuXing[i] );
        if( 3 == qxjObj.arrQXWuXing[i] ) //��ɫ������
        {
            strT2 = "<span style='background-color: #0000FF;'>" + strT2 + "</span>";
        }
        strTemp += "����" +  strT2;
        strTemp += "<br>";
        //��������
        strTemp += ArrayQiXingMiaoShu[ qxjObj.arrJue[i] ];
        strTemp += "<br>";        
        //��ͷ��β�ж�
        if(0 == i )
        {
            //�ӿ�ͷ
            strTemp += "<b>" + ArrayQiXingStart[ qxjObj.arrJue[i] ] + "</b><br>" ;
        }
        if(6 == i)
        {
            //�ӽ�β
            strTemp += "<b>" + ArrayQiXingEnd[ qxjObj.arrJue[i] ] + "</b><br>" ;
        }        
        //���
        strRet += strTemp;
    }
    //����˳�����˳ʱ������ʾ
    if( 1 == qxjObj.typeShunNi || 3 == qxjObj.typeShunNi )
    {
        strRet += GetFuchsiaText( GetBoldText("˳�����˳ʱ�����⣬˳�����ۺ��ǽ�β�����۴󼪡�") ) + "<br>";
    }
    strRet += "<br>";
    
    //��̫һ��ͼ������
    strRet += "<b>������̫һ��ͼ������</b>������Ϊ���﷢չ�Ĺؼ�Ҫ�أ�<br>";
    strRet += "����ͼ��̫һ��ͼ������<br>";
    var tyyxCount = 0; //���Ǽ���
    for(var i=0; i<7; i++)
    {
        if( qxjObj.arrTaiYiYiXing[i] > 0 ) //������
        {
            strTemp = ArrayQiXingNames[qxjObj.arrJue[i]] + "������" 
                     + ArrayQiXingNames[TaiYiXingTu[i]] + "������";
            strTemp = GetRedText( GetBoldText(strTemp) );
            tyyxCount++;
        }
        else
        {
            //��������
            strTemp = ArrayQiXingNames[qxjObj.arrJue[i]] + "������" 
                     + ArrayQiXingNames[TaiYiXingTu[i]] + "����==";
        }
        //����ַ���
        strRet += strTemp + "<br>";
    }
    strTemp = "̫һ���Ǽ�����" + String( tyyxCount );
    if( tyyxCount >= 7 )
    {
        strTemp += "����̫һ��ͼȫ�죩";
    }
    else if( tyyxCount < 1 ) //˳���
    {
        strTemp += "��˳�����";
    }
    strRet += strTemp + "<br>";
    strRet += "<br>";
    
    //���ʱ��ͼ��ͬ��
    strRet += "<b>�ġ����ʱ��ͼ��ͬ��</b>��ͬ��Ϊ���﷢չ�Ĺؼ�ʱ��㣩<br>";
    strRet += "����ͼ����ʱ��ͼ����ͬ<br>";
    var jstxCount = 0; //��ʱͬ�Ǽ���
    for(var i=0; i<7; i++)
    {
        if( qxjObj.arrJueShiTongXing[i] > 0 ) //�Ǿ�ʱͬ��
        {
            strTemp = ArrayQiXingNames[qxjObj.arrJue[i]] + "������" 
                     + ArrayQiXingNames[ qxjObj.curJueShiTu[i] ] + "����ͬ";
            strTemp = GetGreenText( GetBoldText(strTemp) );
            jstxCount++;
        }
        else
        {
            //����ͬ��
            strTemp = ArrayQiXingNames[qxjObj.arrJue[i]] + "������" 
                     + ArrayQiXingNames[ qxjObj.curJueShiTu[i] ] + "������";
        }
        //����ַ���
        strRet += strTemp + "<br>";
    }
    strTemp = "��ʱͬ�Ǽ�����" + String( jstxCount );
    if( jstxCount >= 7 ) //ȫ��ͬ��
    {
        strTemp += "��˳ʱ����";
    }
    else if( jstxCount < 1 ) //ȫ������
    {
        strTemp += "�����ʱ��ͼȫ�죩";
    }
    strRet += strTemp + "<br>";
    strRet += "<br>";
    
    //ͬ�츴���ж�
    strRet += "<b>�塢ͬ�츴���б�</b>������Ϊ���﷢չ���ش�ؿڣ�<br>";
    var fxCount = 0; //��ʱͬ�Ǽ���
    for(var i=0; i<7; i++)
    {
        if( qxjObj.arrTongYiFuXing[i] >= 3 ) //�Ӻ��Ǹ���
        {
            strTemp = "��" + String(i+1) + "����"
                    + GetFuchsiaText( GetBoldText(ArrayQiXingNames[qxjObj.arrJue[i]])) ;
            strRet += strTemp + "<br>";
            fxCount++;
        }
    }
    //����
    strTemp = "ͬ�츴�Ǽ�����" + String(fxCount) + "<br>";    
    strRet += strTemp + "<br>";

    //����
    return strRet;
}

/////////////////////////////////////////////////////////////////
//������㷨
function GetRandomInt(nMax)
{
    var d = new Date();
    nMax = Math.floor(nMax); //Ŀǰֻ������
    if( nMax < 1 ) //����������������
    {
        return 0;
    }
    //���غ��������ɵ������
    return d.getTime() % nMax;    
}

//��֧�ٲ�����
//�������� ľ0 ��1 ��2 ��3 ˮ4
var DiZhiChaWuXing = [
    4,//��ˮ
    2,//����
    0,//��ľ
    0,//îľ
    2,//����
    1,//�Ȼ�
    1,//���
    2,//δ��
    3,//���
    3,//�Ͻ�
    2,//����
    4 //��ˮ
];

//7��������
var ArrayQiXingNames = [
    "����", "���", "����", "��Ȩ", "���", "����", "ҡ��"
];
//�������� ľ0 ��1 ��2 ��3 ˮ4
var ArrayQiXingWuXing = [
    -1, -1, 4, 0, 1, 2, 3
];//�У��飬ˮ��ľ����������
var ArrayQXWXPrefixStrs = [
    "��", "��", "��","��","��","��","��"
];

//��������
var ArrayQiXingMiaoShu = [
"���󣺿��ޡ�����Ϊ�����Ϊû�У�Ϊ����Ϊ�ľ���Ϊ��æ������֮������������������ȥ��", //����
"���󣺿�ʼ�����Ϊ��ʼ���𲽡���֮ʼ�����õĿ�ͷ��׼����������Ŀ�ʼ����Դ��", //���
"�����γɡ�����Ϊ������γɡ���չ��������������չ�����棬������ķ�չ��ͷ��", //����
"���󣺾�������ȨΪ����ľ����������ȶ��ı��ࡢ���ٲ�ʢ����ҵ�����ĳɹ���",   //��Ȩ
"���󣺾��������Ϊ���﷢չ�ľ��������޼��¡����塢�ϲ㡢��������Ƣ����",//���
"���󣺼���������Ϊ���﷢չ�ļ������ء��˲�����ʢ����λ����ְ�����䡢˥�ܡ�",  //����
"���󣺱仯��ҡ�����������䣬Ϊ�仯��ת�������ǣ��������������������档"   //ҡ��
];

//���ǿ�ʼ������
var ArrayQiXingStart = [
    "���࿪ʼ�������ڿ�ͷ����һ����Ȼ���ɣ�������ɶ׼����û����",
    "��诿�ʼ������ڿ�ͷ���ּ��࣬���õ�׼����",
    "���Ὺʼ��ǿʱ������������ʱ����һ��ϣ����������ۼ�����",
    "��Ȩ��ʼ��ǿʱһ�����ܺõĿ�ʼ����ʱ�������￪ʼʵ�У����濪ʼչ����",
    "��⿪ʼ��ǿ�Ļ��ǺõĿ�ʼ�����Ļ��Ǽ����ġ��������Ǹ����������顣",
    "������ʼ���������Ŀ�ʼ���𲽼��ѡ�",
    "ҡ�⿪ʼ�����仯�����Ļ�ָ��������Ĳ��أ�ǿ�Ļ���������Ҫ���д�仯��"
];

//���ǽ���������
var ArrayQiXingEnd = [
    "��������������ڽ�β���ף�����Է������뷨�ˡ������ռ�����²�ȥ�����ò�Ϊ�ס�ռ���һ��޵��󼪡�",
    "��诽���������ڽ�β����������������ж��ˡ�",
    "���������ǿ����һ�ֺ��£���ʱ�����е�ϣ��������һ�����С��������ǿ����У����򲻽��顣",
    "��Ȩ������ǿʱ���������ɹ�������������¿ɵ�С��С����",
    "��������ǿ��������Ǹ����£������ķᡣ��ʱ����������У������ϻ�������",
    "����������������������ж��������ǿ������Ȼ����Լ������⣬��������һ���ǿ������ġ�",
    "ҡ������������ʵ������Ա仯Ī�������һ�㲻����ȥ����"
];

//��׼��̫һ��ͼ
//"����", "���", "����", "��Ȩ", "���", "����", "ҡ��"
var TaiYiXingTu = [
    0, 1, 2, 3, 4, 5, 6
];

//������ʱ�ľ�ʱ��ͼ
//"����"0, "���"1, "����"2, "��Ȩ"3, "���"4, "����"5, "ҡ��"6
var JueShiXingTuArray = [
    //ľ
    [4, 3, 1, 0, 6, 2, 5 ],
    //��
    [5, 4, 1, 0, 2, 3, 6 ],
    //��
    [6, 5, 1, 0, 3, 4, 2 ],
    //��
    [2, 6, 1, 0, 4, 5, 3 ],
    //ˮ
    [3, 2, 1, 0, 5, 6, 4 ]
];

//ǿ�������飬�У��棬������
var ArrayQiangRuo = [
    "��������",
    "�������",
    "������",
    "�����",
    "����",
    "���",
    "��"
];

var QXWXColors = [
"#00AA00",// ľ��
"#FE0000",// ���
"#A0522D",// ����#BB7B5B
"yellow",// ���  #FDFD00
"#00F6FF"//  ˮ��
];
//���ǵ�����ɫ
function PackQXWXText(text, nWX)
{
    var idWX = nWX;
    var clr = "black";  //����鲻��������ž��ú�ɫ
    if( (idWX >= 0) && (idWX <= 4 ))
    {
        clr = QXWXColors[idWX];
    };
    //
    var strResult =  "<span style=\"color: " + clr + "\">";
    strResult += text;
    strResult += "</span>";
    return strResult;
}
//�ܸ��������
//���Ǿ�������
var QXJLeiXing = [
  "<b>��ͨ��</b>",//0
  "<span style='color: green; font-weight: bold; font-size:150%;'>˳���</span>",//1
  "<span style='color: red; font-weight: bold; font-size:150%;'>�����</span>",//2
  "<span style='color: green; font-weight: bold; font-size:150%;'>˳ʱ��</span>",//3
  "<span style='color: red; font-weight: bold; font-size:150%;'>��ʱ��</span>" //4
];

//���Ǿ�����������
var QXJLeiXingMiaoShu = [
  "��",//0
  "<span style='color: green; font-weight: bold;'>��˳Ӧ������У��������С�</span>",//1
  "<span style='color: red; font-weight: bold;'>�����²��������ֱ�ӷ����</span>",//2
  "<span style='color: green; font-weight: bold;'>��˳Ӧʱ�����У��������С�</span>",//3
  "<span style='color: red; font-weight: bold;'>�����²���ʱ����ֱ�ӷ����</span>" //4
];

//̫һ���ǡ���ʱͬ�ǣ�ͬ�츴��
var QXTongYiStrs = [
    "��", //0��û��
    "<span style='color: red; font-weight: bold;'>̫һ����</span>", //1 ����ؼ�Ҫ��
    "<span style='color: green; font-weight: bold;'>��ʱͬ��</span>", //2 ����ؼ�ʱ���
    "<span style='color: fuchsia; font-weight: bold;'>ͬ�츴��</span>"  //3 �����ش�ؿ�
];

//̫һ��ͼ���߸�ȫ�죬��͵�1*7 == 7��ȫ�����������
//��ʱ��ͼ���߸�ȫͬ����͵�2*7 == 14��ȫͬ�󼪣���ͬ���
function CalcArraySum(arr)
{
    var sum = 0;
    var len = arr.length;
    if(len < 1)
    {
        return 0;
    }
    for(var i=0; i<len; i++) //ÿ��Ԫ�����
    {
        sum += Number( arr[i] );        
    }
    return sum;
}

//�������������ɹ���ʱ���ַ���
function GetGGTimeStr(curJD)
{
    var myDD = JD.DD(curJD);
    var strTemp = "����ʱ�䣺" + String(myDD.Y) + "��" 
        + String(myDD.M) + "��"
        + String(myDD.D) + "��"
        + String(myDD.h) + "ʱ"
        + String(myDD.m) + "��"
        + "�� " + WeekDays[ GetiDayOfWeek(curJD) ] ;
    //����
    return strTemp;
}
//��������������ũ��ʱ���ַ���
function GetNNTimeStr(curJD)
{
    var myDD = JD.DD(curJD);//������
    //ũ����0���ǽ������ʱ��23������������ʱ��Ҫ����
    var theOB;
    if(myDD.h >= 23)//ũ��ʱ��
    {
        theOB = GetJDtoNongLiOB(curJD + 1);
    }
    else
    {
        theOB = GetJDtoNongLiOB(curJD);
    }
    var strTemp = "ũ��ʱ�䣺" + theOB.Lyear3 + "�� "
              + theOB.Lleap + theOB.Lmc + "�� "
              + theOB.Ldc + "�� "
              + DiZhi[ (Math.floor((myDD.h+1)/2 )) % 12 ] + "ʱ"
              + " ���Ƶ�" + String( theOB.Lyear0 + 1984 + 2698 + 56 ) + "�꣩";//�Ƶۼ�������϶�56��
    //����
    return strTemp;
}

function GetNSpace(n)
{
    var count = Number(n);
    if(count < 1)
    {
        return "";
    }
    //����
    var strRet = "";
    for(var i=0; i<count; i++)
    {
        strRet += SpaceEN2;
    }
    return strRet;
}
