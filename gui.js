//������������ʱ��� 1583 �� �� 3199 �꣬�������������һ�굽3200ǰһ�꣬3200���Ƿ�Ϊ���������
//ȫ�ֱ���������ʼʱ��ͽ���ʱ���һ�¾Ϳ��Ը������̵���ݷ�Χ������Ϊ�����240��ʱ��Ρ�
var gStartYear = 1924;
var gEndYear = 2164;
//������ʱ���ĸ�ѡ����
var sYear = document.getElementById("sYear");
var sMonth = document.getElementById("sMonth");
var sDay = document.getElementById("sDay");
var sHour = document.getElementById("sHour");

//��������ʱ��ļ��Ӽ�������ʼ������ ���� ���� ����
var idYearJZ =  0;
var idMonthJZ =  0;
var idDayJZ =  0;
var idHourJZ =  0;

/**************************************************/
//�����ؼ��ĳ�ʼ���Ͷ�̬����
function InitYears()    //��ʼ��ʱһ���Ե���
{
    //��վɵ�һ��ѡ��
    sYear.remove(0);    
    var curOp;
    for(var i=gStartYear; i<=gEndYear; i++)
    {
        curOp = document.createElement('option');
        curOp.value = i;
        curOp.text = String(i);
        sYear.add(curOp, null);
    }
    //Ĭ��ѡ��2000��
    sYear.selectedIndex = 2000 - gStartYear;
}
//��ʼ��2000��1�·�
function InitDays() //��ʼ��ʱһ���Ե���
{
    //��վɵ�һ��ѡ��
    sDay.remove(0);
    //��ӣ�2000��1��
    var nCount = 31;
    var curOp;
    for(var i=1; i<=nCount; i++)
    {
        curOp = document.createElement('option');
        curOp.value = i;
        curOp.text = String(i);
        sDay.add(curOp, null);
    }
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
//�жϹ�������
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
function OnGLYearChanged()
{
    //��ݱ仯ֻӰ��2��
    var curYear = sYear.value;
    var curMonth = sMonth.value;
    if(curMonth != 2)
    {
        return; //����2��
    }
    //��2��
    var oldDaysCount = sDay.length;
    var newDaysCount = GetGLDaysCountByYearAndMonth(curYear, curMonth);
    if( oldDaysCount == newDaysCount )
    {
        //�ɵ��������µ�����û�䣬����Ҫ�Ķ�
        return;
    }
    //�����б仯
    if( oldDaysCount > newDaysCount )//�ɵ���29�죬�µ���28��
    {
        sDay.remove(29 - 1);    //�Ƴ�ĩβ��29��
    }
    else//�ɵ�28�죬�µ�29��
    {
        var curOp = document.createElement('option');
        curOp.value = 29;
        curOp.text = "29";
        sDay.add(curOp, null);
    }
}
//�����·ݱ仯�������Ƿ��������
function OnGLMonthChanged()
{
    var curYear = sYear.value;
    var curMonth = sMonth.value;
    //����������������
    //�ɵ�������ȫ���Ƴ���
    var oldCount = sDay.length;
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
            sDay.remove( i-1 );
        }
    }
    else
    {
        //���˲���
        for(var i=oldCount+1; i<=newCount; i++)
        {
            var curOp = document.createElement('option');
            curOp.value = i;
            curOp.text = i;
            sDay.add(curOp, null);
        }
    }
}
//���ݵ�ǰʱ�����ÿؼ�����ʾ
function FillCurTime()
{
    var curTime = new Date();
    var year = curTime.getFullYear();
    var month = curTime.getMonth(); //JS�·���0��11
    var day = curTime.getDate();    //getDate�����ӣ�getDay�����ڼ�
    var hour = curTime.getHours();
    //���ÿؼ�
    sYear.selectedIndex = year - gStartYear;
    //��ݱ仯
    OnGLYearChanged();    
    sMonth.selectedIndex = month;
    //�·ݱ仯
    OnGLMonthChanged();
    //�������Ӻ�Сʱ
    sDay.selectedIndex = day - 1;
    sHour.selectedIndex = hour;
}

///////////////////////////////////////////////////////
////��������ɫ��ɺ�ɫ
function GetBlackText(text)
{
    var resultText = "<span style=\"color: black\">";
    resultText += text;
    resultText += "</span>";
    return resultText;
}
//��������ɫ��ɺ�ɫ
function GetRedText(text)
{
    var resultText = "<span style=\"color: red\">";
    resultText += text;
    resultText += "</span>";
    return resultText;
}
//��������ɫ�����ɫ
function GetGreenText(text)
{
    var resultText = "<span style=\"color: green\">";
    resultText += text;
    resultText += "</span>";
    return resultText;
}
//��������ɫ�����ɫ
function GetBlueText(text)
{
    var resultText = "<span style=\"color: blue\">";
    resultText += text;
    resultText += "</span>";
    return resultText;
}
//��������ɫ�������ɫ
function GetSkyBlueText(text)
{
    var resultText = "<span style=\"color: deepskyblue\">";
    resultText += text;
    resultText += "</span>";
    return resultText;
}
//fuchsia�Ϻ�ɫ
function GetFuchsiaText(text)
{
    var resultText = "<span style=\"color: fuchsia\">";
    resultText += text;
    resultText += "</span>";
    return resultText;
}
//��ɫ
function GetDarkOrchidText(text)
{
    var resultText = "<span style=\"color: darkorchid\">";
    resultText += text;
    resultText += "</span>";
    return resultText;
}
//����
function GetBoldText(text)
{
    var resultText = "<b>";
    resultText += text;
    resultText += "</b>";
    return resultText;  
}

///////////////////////////////////////////////
/**********************
������ּ���
**********************/
function ML_calcBaZi()
{
    //��ȡ������ʱ
    var yy = Number(sYear.value);
    var mm = Number(sMonth.value);
    var dd = Number(sDay.value);
    var hh = Number(sHour.value);
    if(hh % 2 == 1)//����Сʱ����0.9
    {
        hh += 0.9;
    }
    //console.log(yy+ "  "+ mm +"  "+ dd + " "+ hh);
    var ob=new Object();
    
    var jd=JD.JD(year2Ayear(yy),mm-0, dd-0 + hh/24.0);
    //��ȥ�������ļ�ʱ�����Ȱ�120��
    obb.mingLiBaZi( jd+ (-8.0)/24 - J2000, 120.0/radd, ob ); //���ּ���
   /*
    var strBaZi =
        '<font color=red>  <b>[�ձ�]��</b></font>'+'���� '+Cml_y.value+'-'+Cml_m.value+'-'+Cml_d.value + ' �������� ' + int2(jd+0.5) + ' ��2000����' + int2(jd+0.5-J2000) + '��<br>'
      + '<font color=red  ><b>[����]��</b></font>'    + ob.bz_jn+'�� '+ob.bz_jy+'�� '+ob.bz_jr+'�� '+ob.bz_js+'ʱ ��̫�� <font color=red>' + ob.bz_zty+ '</font><br>'
      + '<font color=green><b>[��ʱ]��</b></font><i>' + ob.bz_JS + '</i><br>'
      + '<font color=green><b>[ʱ��]��</b></font><i>' + '23�� 01�� 03�� 05�� 07�� 09�� 11�� 13�� 15�� 17�� 19�� 21�� 23';
    */
    idYearJZ = JiaZi.indexOf( ob.bz_jn );   //����
    idMonthJZ = JiaZi.indexOf( ob.bz_jy );  //����
    idDayJZ = JiaZi.indexOf( ob.bz_jr );    //����
    idHourJZ = JiaZi.indexOf( ob.bz_js );   //��ʱ
    //console.log(ob.bz_jn+ "  "+ ob.bz_jy +"  "+ ob.bz_jr + " "+ ob.bz_js);
    return;
}

/**************************************************/
//�ո�
var SpaceZH = "&nbsp;"; //���ֿո�
var SpaceZHN = "��";    //���ַ��ո�
var SpaceEN1 = "&ensp;";//��Ӣ�ո�
var SpaceEN2 = "&emsp;";//˫Ӣ�ո�
//���������ı�
var AllText = document.getElementById("AllText");
var YinYangLabel = new Array("�|�|&emsp;�|�|", "�|�|�|�|�|");
var YinYangSelf = new Array("��", "��");

//����������
function CalcGuiCangPanPai()
{    
    //�ȼ���һ������ʱ��İ���
    ML_calcBaZi();  //idYearJZ, idMonthJZ, idDayJZ, idHourJZ
    //����������ʱ�ĸ�֧
    var yyGan = TianGan[idYearJZ % 10];
    var yyZhi = DiZhi[idYearJZ % 12];
    var mmGan = TianGan[idMonthJZ % 10];
    var mmZhi = DiZhi[idMonthJZ % 12];
    var ddGan = TianGan[idDayJZ % 10];
    var ddZhi = DiZhi[idDayJZ % 12];
    var hhGan = TianGan[idHourJZ % 10];
    var hhZhi = DiZhi[idHourJZ % 12];
    //���ǵ�֧���
    var iStartStar = idDayJZ % 12;  //��֧���
    
    var strResult = "<div align='left' style='line-height: 18pt; font-family: ����;'>"; 
    var strTemp = "";
    //س�Ĳ��ֲ�����
    strResult += "<span style='white-space: nowrap;'>";
    //����ʱ����ʾ
    strTemp = "����ʱ�䣺" + sYear.value + " �� " + 
            sMonth.value + " �� " + 
            sDay.value + " �� " + 
            sHour.value + " ʱ" ;
    strResult += strTemp;
    strResult += "<br>";
    //��֧��ʱ
    strTemp = "��֧��ʱ��" 
            + yyGan + GetBoldText( GetFuchsiaText(yyZhi) ) + "�� "
            + mmGan + GetBoldText( GetFuchsiaText(mmZhi) ) + "�� "
            + ddGan + GetBoldText( GetFuchsiaText(ddZhi) ) + "�� "
            + hhGan + hhZhi + "ʱ";
    strResult += strTemp;
    strResult += "<br>";
    //����ռ��
    var strZhanShi = document.getElementById("tZhanShi").value;
    strTemp = "����ռ�£�" + strZhanShi;
    strResult += strTemp;
    strResult += "<br>";
    //�����Ա���Ф��ְҵ
    var strGender = document.getElementById("sGender").value;
    var strShengXiao = document.getElementById("sShengXiao").value;
    var strJob = document.getElementById("sJob").value;
    strTemp = "�����Ա�" + strGender + SpaceEN2         
        + "��Ф��" + strShengXiao + SpaceEN2
        + "ְҵ��" + strJob;
    strResult += strTemp;
    strResult += "<br>";
    //��ʱ����
    var nZhanShiNian = parseInt(strZhanShi);      //�����ж��Ƿ���ռ����
    var strTempWX = "";
    if( (nZhanShiNian >=  gStartYear) && (nZhanShiNian <= gEndYear) )
    {
        strTempWX = DiZhiWuXing[(nZhanShiNian-gStartYear)%12];
        var strTempDZ = DiZhi[(nZhanShiNian-gStartYear)%12];
        strTemp = "��ʱ���У�" + PackWuXingColorText(strTempDZ+strTempWX, strTempWX)
                + "�������ԣ�";
    }
    else
    {
         strTempWX = GetTianShiByDiZhi(yyZhi, mmZhi, ddZhi);
         strTemp = "��ʱ���У�" + PackWuXingColorText(strTempWX, strTempWX)
                + "�����������֤�Ƿ������ȷ��";
    }
    strResult += strTemp;
    strResult += "<br>";
    strResult += "<br>";    //�໻һ�У���������
    
    
    //ȡ��13��س������ʮ����
    var guiYao = new Array(13);
    var idXing = new Array(13); //0�������ֿղ���
    for(var i=0; i<13; i++)
    {
        var tempID = "gui" + String(i+1);
        guiYao[i] = Number( document.getElementById( tempID ).value );
        idXing[i] = (iStartStar + (i + 11) ) % 12;
        //console.log(guiyao[i]);
        //console.log( DiZhi[ idXing[i] ] );
    }
    //���0�������Ե�����
    var strGuaYinYang = "";
    if( 1 == guiYao[0] )
    {
        strGuaYinYang = GetRedText(SpaceEN2 + "����" + SpaceEN2);        
    }
    else
    {
        strGuaYinYang = GetBlackText(SpaceEN2 + "����" + SpaceEN2);
    }
    /////////////////////////////////////////
    //�������������    
    var iQianGua =  GetGuaIndex(guiYao[6], guiYao[5], guiYao[4],
                                guiYao[3], guiYao[2], guiYao[1] );
    var iHouGua =   GetGuaIndex(guiYao[7], guiYao[8], guiYao[9],
                                guiYao[10], guiYao[11], guiYao[12]);
    //��ȡ����������
    strTemp = GetGuaMingAndWuXing(iQianGua, iHouGua);
    strResult += strTemp;
    strResult += "<br>";

    /////////////////////////////////////////
    //�����һ��س����ͨ
    strTemp = PackYaoLine(guiYao[6], idXing[6], guiYao[7], idXing[7]);
    strResult += strTemp;
    strResult += "<br>";
    /////////////////////////////////////////
    //�ڶ��ţ���ͨ
    strTemp = PackYaoLine(guiYao[5], idXing[5], guiYao[8], idXing[8]);
    strResult += strTemp;
    strResult += "<br>";
    /////////////////////////////////////////
    //�����ţ�Ԫ��
    strTemp = PackYaoLineYuan(guiYao[4], idXing[4], guiYao[9], idXing[9], strGuaYinYang) ;
    strResult += strTemp;
    strResult += "<br>";
    /////////////////////////////////////////
    //�����ţ�����
    strTemp = PackYaoLineWo(guiYao[3], idXing[3], guiYao[10], idXing[10]) ;
    strResult += strTemp;
    strResult += "<br>";
    /////////////////////////////////////////
    //�����ţ���ͨ
    strTemp = PackYaoLine(guiYao[2], idXing[2], guiYao[11], idXing[11]) ;
    strResult += strTemp;
    strResult += "<br>";
     /////////////////////////////////////////
    //�����ţ���ͨ
    strTemp = PackYaoLine(guiYao[1], idXing[1], guiYao[12], idXing[12]) ;
    strResult += strTemp;
    strResult += "<br>";    
    strResult += "</span>"; //�����б�ǵ�ĩβ
    //��ʼ���Դ�
    strResult += "<br>";
    strTemp = GetGuiCangGuaYi(iQianGua, iHouGua);
    strResult += strTemp;
    strResult += "<br>";
    strResult += "<br>";

    //ʮ����������
    strTemp = GetTianXingZhuShi();
    strResult += strTemp;
    strResult += "<br>";
    
    //�������
    strTemp = Get12XingChuDong(guiYao, idXing);
    strResult += strTemp;
    strResult += "<br></div>"; //���̽���
    //�滻���Ŀո���Ӧ�����ֻ����������
    strResult = strResult.replace(/&emsp;/g, "��");
    //
    //���õ�������
    AllText.innerHTML = strResult;
    //ִ���Զ����Ƶ������壬IE9��Chrome֧�֣�������Բ��С�
    document.execCommand("selectAll");  //ȫѡ
    document.execCommand("copy");       //����
    document.execCommand("unselect");   //��ѡ��
}
//��ͨس��������ǰس��ǰس���򣬺�س����س����
function PackYaoLine(curQYao, curQIX, curHYao, curHIX)
{
    //var strMidSpace = SpaceZH+SpaceZH+SpaceZH+SpaceZH+SpaceZH;
    var strMidSpace = SpaceEN2+SpaceEN2+SpaceEN2+SpaceEN2;
    var strRet = ""; 
    var strPart1 = "";  //ǰس��
    var strPart2 = "";  //ǰسͼ
    var strPart3 = "";  //��سͼ
    var strPart4 = "";  //��س��
    //����ɫ�Զ��Ӵ�
    strPart1 = YinYangSelf[ curQYao ] + DiZhiWuXing[ curQIX ] + SpaceEN2
        + TianXing[ curQIX ] + SpaceEN2;
    strPart1 = PackWuXingColorText(strPart1, DiZhiWuXing[ curQIX ]);
    strPart2 = GetBlackText(YinYangLabel[ curQYao ]) ;
    //
    strPart3 = YinYangLabel[ curHYao ] + SpaceEN2;   
    if( curQYao != curHYao )
    {
        strPart3 = GetRedText(strPart3);
    }
    else
    {
        strPart3 = GetBlackText(strPart3);
    }
    strPart4 =  TianXing[ curHIX ] + SpaceEN2
        + YinYangSelf[ curHYao ] + DiZhiWuXing[ curHIX ];
    strPart4 = PackWuXingColorText(strPart4, DiZhiWuXing[ curHIX ]);
    //
    strRet = strPart1 + strPart2 + strMidSpace + strPart3 + strPart4;
    return strRet;
}
//Ԫ��س�����Ե�����
function PackYaoLineYuan(curQYao, curQIX, curHYao, curHIX, strGuaYinYang)
{
    //var strMidSpace = SpaceZH+SpaceZH+SpaceZH+SpaceZH+SpaceZH;
    var strMidSpace = SpaceEN2+SpaceEN2+SpaceEN2+SpaceEN2;
    var strRet = ""; 
    var strPart1 = "";  //ǰس��
    var strPart2 = "";  //ǰسͼ
    var strPart3 = "";  //��سͼ
    var strPart4 = "";  //��س��
    //����ɫ�Զ��Ӵ�
    strPart1 = YinYangSelf[ curQYao ] + DiZhiWuXing[ curQIX ] + SpaceEN2
        + TianXing[ curQIX ] + SpaceEN2;
    strPart1 = PackWuXingColorText(strPart1, DiZhiWuXing[ curQIX ]);
    strPart2 = YinYangLabel[ curQYao ] ;
    strPart2 = GetBlueText(strPart2);
    //Ԫ��һ��
    strPart3 = YinYangLabel[ curHYao ] + SpaceEN2;     
    if( curQYao != curHYao )
    {
        strPart3 = GetFuchsiaText(strPart3);
    }
    else
    {
        strPart3 = GetBlueText(strPart3);
    }
    strPart4 =  TianXing[ curHIX ] + SpaceEN2
        + YinYangSelf[ curHYao ] + DiZhiWuXing[ curHIX ];
    strPart4 = PackWuXingColorText(strPart4, DiZhiWuXing[ curHIX ]);
    //
    strRet = strPart1 + strPart2 + strGuaYinYang + strPart3 + strPart4;
    return strRet;
}

//����س
function PackYaoLineWo(curQYao, curQIX, curHYao, curHIX)
{
    //var strMidSpace = SpaceZH+SpaceZH+SpaceZH+SpaceZH+SpaceZH;
    var strMidSpace = SpaceEN2+SpaceEN2+SpaceEN2+SpaceEN2;
    var strRet = ""; 
    var strPart1 = "";  //ǰس��
    var strPart2 = "";  //ǰسͼ
    var strPart3 = "";  //��سͼ
    var strPart4 = "";  //��س��
    //����ɫ�Զ��Ӵ�
    strPart1 = YinYangSelf[ curQYao ] + DiZhiWuXing[ curQIX ] + SpaceEN2
        + TianXing[ curQIX ] + SpaceEN2;
    strPart1 = PackWuXingColorText(strPart1, DiZhiWuXing[ curQIX ]);
    strPart2 = YinYangLabel[ curQYao ] ;
    strPart2 = GetBlueText(strPart2);
    //Ԫ��һ��
    strPart3 = YinYangLabel[ curHYao ] + SpaceEN2;     
    if( curQYao != curHYao )
    {
        strPart3 = GetFuchsiaText(strPart3);
    }
    else
    {
        strPart3 = GetBlueText(strPart3);
    }
    strPart4 =  TianXing[ curHIX ] + SpaceEN2
        + YinYangSelf[ curHYao ] + DiZhiWuXing[ curHIX ];
    strPart4 = PackWuXingColorText(strPart4, DiZhiWuXing[ curHIX ]);
    //
    strRet = strPart1 + strPart2 + strMidSpace + strPart3 + strPart4;
    return strRet;
}

function GetGuaMingAndWuXing(iQianGua, iHouGua)
{
    var strMidSpace = SpaceEN2+SpaceEN2+SpaceEN2+SpaceEN2;
    //
    var strQianGua = Gui64GuaMing[iQianGua];
    var strQianGuaWX = Gui64WuXing[iQianGua];
    var strHouGua = Gui64GuaMing[iHouGua];
    var strHouGuaWX = Gui64WuXing[iHouGua];
    //����
    var strMing = GetBlackText(strMidSpace + SpaceEN2 + SpaceEN2)
        + GetBlackText(SpaceEN2 + strQianGua)
        + GetBlackText(strMidSpace)
        + GetBlackText(SpaceEN2 + strHouGua);
    strMing = "<span style=\"margin-left: -8px;\">" + GetBoldText(strMing)
        + "</span>" ;
    //����
    var strWX= GetBlackText(strMidSpace)
        + GetBlackText(strMidSpace)
        + PackWuXingColorText(strQianGuaWX, strQianGuaWX)
        + GetBlackText(strMidSpace)
        + GetBlackText(strMidSpace)
        + PackWuXingColorText(strHouGuaWX, strHouGuaWX);
    //����
    return strMing + "<br>" + strWX;
}

function GetGuiCangGuaYi(iQianGua, iHouGua)
{
    var strRet = GetBoldText("������壺<br>");
    strRet += Gui64MiaoShu[iQianGua];
    strRet += "<br>";
    strRet += Gui64MiaoShu[iHouGua];
    //����
    return strRet;
}
//��������
function GetTianXingZhuShi()
{
    var strRet = GetBoldText("ʮ���������£�<br>");
    for(var i=0; i<6; i++)
    {
        for(var j=0; j<2; j++)
        {
            var curIndex = i*2 + j;
            strRet += DiZhi[curIndex] + "-" + TianXingMiaoShu[curIndex]
                + SpaceEN2 + SpaceEN2;
        }
        strRet += "<br>" ;
    }    
    return strRet;
}
//��ѯ��ռ����
//��ѯʮ���ǳ��������˳��Ρ�������ˮ
function Get12XingChuDong(guiYao, idXing)
{
    //guiYao����0����1�����飬13��
    //idXing���������13������0������
    //�����ַ���
    var strTemp = "";
    var strRet = GetBoldText("��ض�����<br>");
    //����ʮ�����ǵĶ�������
    var dongHua = new Array(12);
    for(var j=0; j<12; j++)
    {
        dongHua[j] = 0; //��ʼ����Ϊ��
    }
    
    //����ǰ���жϳ������
    for(var i=1; i<=6; i++)
    { 
        //ǰس��ǰ�ǵ�֧��š�ǰس����
        var qianYao = guiYao[i];
        var iQianXing = idXing[i];
        var qianWX = DiZhiWuXing[ iQianXing ];
        //��س�ͺ��ǵ�֧��ź�س����
        var houYao = guiYao[13-i];
        var iHouXing =  idXing[13-i];
        var houWX = DiZhiWuXing[ iHouXing ];
        //�Ƿ�
        if( qianYao != houYao )
        {
            //��س
            //����ǰ����ų���
            strTemp = TianXingChuDong[iQianXing] + "<br>";
            strRet += strTemp;
            //����ʮ�����ǵĶ�������
            //����ֻ�����ǰ�Լ���
            dongHua[iQianXing] = 1;
            //�жϹ��˳��κ�������ˮ
            //������2��������Ϊˮ
            if( (2 == iQianXing) && ("ˮ" == houWX) )
            {
                strTemp = "���˳��Σ����˶���ˮ��������Я����ҵ�󼪡�<br>";
                strRet += strTemp;
            };
            //������3��������Ϊˮ
            if( (3 == iQianXing) && ("ˮ" == houWX) )
            {
                strTemp = "������ˮ����������ˮ��������������ҵ�󼪡�<br>";
                strRet += strTemp;
            };
            //������׻�����
            if( 3 == iQianXing )//������ǰس������س����� i
            {
                //������ǰس�����ˣ��ҵ��׻��Ͱ׻�ǰس
                var baiHuYao = guiYao[i+6];
                var baiHuQian = guiYao[ 13 - (i+6) ];
                if( baiHuYao != baiHuQian)//�׻�һ��Ҳ����
                {
                    strTemp = "����������������ǰ�ԣ��׻��ں��ԣ����������ж��������Ĳ���֮�ࡣ<br>";
                    strRet += strTemp;
                }
            }
        }//end outer if
    }
    //����ѭ��ͬʱ������12�ǵĶ�������
    //console.log(dongHua);
    strRet += GetLongFeiFengWu(dongHua);
    strRet += GetYanZiDunTian(dongHua);
    //�������������ж���
    strRet += GetLiuShouChuDong(dongHua);
    strRet += GetHouGongJiaRen(dongHua);
    strRet += GetBeiJiXingCan(dongHua);
    strRet += GetJiaoLongManDi(dongHua);
    strRet += GetShuiZhuXingHai(dongHua);
    strRet += GetLongXingTianXia(dongHua);
    strRet += GetHuLuoPingYang(dongHua);
    strRet += GetXiaoRenDangDao(dongHua);
    strRet += GetGuYanZhuYun(dongHua);    
    return strRet;
}
//�����Ƕ���ͬʱ�����ж�
//���ɷ���
function GetLongFeiFengWu(dongHua)
{
    var str = "���ɷ��裺������ȸͬ����������ҵ������<br>";
    //������3����ȸ��6
    if( (1==dongHua[3]) && (1==dongHua[6]) )
    {
        return str;
    }
    else
    {
        return "";
    }
}
//���Ӷ���
function GetYanZiDunTian(dongHua)
{
    var str = "���Ӷ��죺��ȸ���ͬ����ʧ���ѻ�֮�ࡣ<br>";
    //��ȸ��6����� 11
    if( (1==dongHua[6]) && (1==dongHua[11]) )
    {
        return str;
    }
    else
    {
        return "";
    }
}
//�������������ж�������ǰ�洦��

//���޳���
function GetLiuShouChuDong(dongHua)
{
    var str = "���޳��������ǽԻ��������ѳ�֮�ࡣ<br>";
    var sum = 0;
    for(var i=0; i<12; i++)
    {
        sum += dongHua[i];
    }
    //6��
    if( sum >= 6 )
    {
        return str;
    }
    else
    {
        return "";
    }
}
//�󹬼���
function GetHouGongJiaRen(dongHua)
{
    var str = "�󹬼��ˣ���������ͬ������Ů֮�ࡣ<br>";
    //��� 4 ��� 11
    if( (1==dongHua[4]) && (1==dongHua[11]) )
    {
        return str;
    }
    else
    {
        return "";
    }
}
//�����ǲ�
function GetBeiJiXingCan(dongHua)
{
    var str = "�����ǲӣ����ϡ����¡�̫������������������ͬ��������׿��֮�ࡣ<br>";
    //���� 1 ���� 10  ̫�� 7
    var sum =  dongHua[1] + dongHua[10] + dongHua[7];
    if( sum >= 2 )
    {
        return str;
    }
    else
    {
        return "";
    }
}
//��������
function GetJiaoLongManDi(dongHua)
{
    var str = "�������أ�����������ͬ�����ѽ��ѷ�֮�ࡣ<br>";
    //���� 3  ���� 5
    if( (1==dongHua[3]) && (1==dongHua[5]) )
    {
        return str;
    }
    else
    {
        return "";
    }
}
//ˮע�Ǻ�
function GetShuiZhuXingHai(dongHua)
{
    var str = "ˮע�Ǻ������䡢�����գ���ˮ��ͬ��������֮�ࡣ<br>";
    //���� 0  ��� 4  ��� 11
    if( (1==dongHua[0]) && (1==dongHua[4]) && (1==dongHua[11]) )
    {
        return str;
    }
    else
    {
        return "";
    }
}
//��������
function GetLongXingTianXia(dongHua)
{
    var str = "�������£����������ͬ�����������ࡣ<br>";
    //���� 3  ��� 11
    if( (1==dongHua[3]) && (1==dongHua[11]) )
    {
        return str;
    }
    else
    {
        return "";
    }
}
//����ƽ��
function GetHuLuoPingYang(dongHua)
{
    var str = "����ƽ�����׻������ǣ����ϡ����¡�̫����֮һͬ�������۲���־��<br>";
    //���� 1 ���� 10  ̫�� 7
    //�׻� 9
    var sum =  dongHua[1] + dongHua[10] + dongHua[7];
    if( (sum >= 1) && (1==dongHua[9]) )
    {
        return str;
    }
    else
    {
        return "";
    }
}
//С�˵���
function GetXiaoRenDangDao(dongHua)
{
    var str = "С�˵�����̫��������ͬ��������С�˵�������˼��<br>";
    //���� 0  ̫�� 7
    if( (1==dongHua[0]) && (1==dongHua[7]) )
    {
        return str;
    }
    else
    {
        return "";
    }
}
//��������
function GetGuYanZhuYun(dongHua)
{
    var str = "�������ƣ���ȸ������ͬ����ʧ�ܵ����������鲻˳����<br>";
    //��ȸ 6  ���� 5
    if( (1==dongHua[6]) && (1==dongHua[5]) )
    {
        return str;
    }
    else
    {
        return "";
    }
}
