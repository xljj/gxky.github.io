//������������ʱ��� 1583 �� �� 3199 �꣬�������������һ�굽3200ǰһ�꣬3200���Ƿ�Ϊ���������
//ȫ�ֱ���������ʼʱ��ͽ���ʱ���һ�¾Ϳ��Ը������̵���ݷ�Χ������Ϊ�����240��ʱ��Ρ�
var gStartYear = 1924;
var gEndYear = 2164;
//����������ʱ���ĸ�ѡ���������Ϸ���
var sYear = document.getElementById("sYear");
var sMonth = document.getElementById("sMonth");
var sDay = document.getElementById("sDay");
var sHour = document.getElementById("sHour");
var sMinute = document.getElementById("sMinute");
//ȫ�ֱ�������������صľ��ȡ�γ��
var gBirthJingDu = 120.0;  
var gBirthWeiDu = 38.0;
//��ͼ�ؼ�
var syCanvas = document.getElementById("syCanvas");

/**************************************************/
//�����ؼ��ĳ�ʼ���Ͷ�̬����
function InitGLYears()    //��ʼ��ʱһ���Ե���
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
function InitGLDays() //��ʼ��ʱһ���Ե���
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

//�����������ջ���ת����ʹ��ȫ�� JD ����
//ũ���������ջ���ת����
//////////////////////////////////////////////

//���������ı�
var AllText = document.getElementById("AllText");
//
function CalcGLBaZiPanPai()
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
    
    //JD�������������
    //Ĭ�� Y:2000, M:1, D:1, h:12, m:0, s:0,
    var myJD = JD;  //myJD��JD����ȫ�ֶ��󣬻ᱻĪ�������޸ģ�ֻ��һ����������
    myJD.Y = Number(sYear.value);
    myJD.M = Number(sMonth.value);
    myJD.D = Number(sDay.value);
    myJD.h = Number(sHour.value);
    myJD.m = Number(sMinute.value);
    myJD.s = 30;    //Ĭ����30��
    //��ȡ����ʱ���Ӧ������
    var birthJD = myJD.toJD();
    
    //�ж��Ƿ���Ҫ��ͼ
    var bDraw = Number( document.getElementById("sDrawPic").value );
    //console.log(syCanvas); 
    
    //����Ϊ ���������ա��Ա�ʡ�ݡ����ء��Ƿ���̫�����Ƿ�߼��̣������ľ���
    AllText.innerHTML =  GetGLPaiPanHTML(birthJD, strGender, strBirthShengFen, strBirthShiXian, useZTY, useJZGaoJi, gBirthJingDu
            , bDraw, syCanvas);

    //ִ���Զ����Ƶ������壬IE9��Chrome֧�֣�������Բ��С�
    document.execCommand("selectAll");  //ȫѡ
    document.execCommand("copy");       //����
    document.execCommand("unselect");   //��ѡ�� 
}

