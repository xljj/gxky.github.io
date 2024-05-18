//������������ʱ��� 1583 �� �� 3199 �꣬�������������һ�굽3200ǰһ�꣬3200���Ƿ�Ϊ���������
//ȫ�ֱ���������ʼʱ��ͽ���ʱ���һ�¾Ϳ��Ը������̵���ݷ�Χ������Ϊ�����240��ʱ��Ρ�
var gStartYear = 1924;
var gEndYear = 2164;
//����������ʱ���ĸ�ѡ���������Ϸ���
var sJZYear = document.getElementById("sJZYear");   //������
var sIxMonth = document.getElementById("sIxMonth"); //����0��11�����µ�����
var sJZDay = document.getElementById("sJZDay"); //������
var sIxHour = document.getElementById("sIxHour");  //ʱ����ţ�0��11����ʱ����ʱ
//���ƿ�ʼ��ݵĿؼ�
var sFTStartYear = document.getElementById("sFTStartYear");

//ȫ�ֱ�������������صľ��ȡ�γ��
var gBirthJingDu = 120.0;  
var gBirthWeiDu = 38.0;
//��ͼ�ؼ�
var syCanvas = document.getElementById("syCanvas");

/**************************************************/
//���ƿؼ��ĳ�ʼ���Ͷ�̬����
function InitJZYears()    //�������
{
    sJZYear.length = 0; //��վɵ��б�
    for(var i=0; i<60; i++)
    {
        addOp(sJZYear, i, JiaZi[i]);
    }
    //���õ�ǰѡ������·��б�
    sJZYear.selectedIndex = 0;
    OnJZYearChanged();
}
//function addOp(sel,value,text)  //��select�������option
//��ݱ仯�������·�
function OnJZYearChanged()
{
    //��������
    var jzYear = Number( sJZYear.selectedIndex );
    //������ʼ���·ݣ��廢�����
    var jzStartMM = ArrayDunNian[ jzYear%5 ];
    //����·�
    sIxMonth.length = 0;
    //���
    for(var i=0; i<12; i++)
    {
        addOp(sIxMonth, i, JiaZi[ (jzStartMM+i) % 60 ]);
    }
}

function InitJZDays()     //��������
{
    sJZDay.length = 0;  //��վ��б�
    for(var i=0; i<60; i++)
    {
        addOp(sJZDay, i, JiaZi[i]);
    }
    //���õ�ǰѡ�������ʱ��
    sJZDay.selectedIndex = 0;
    OnJZDayChanged();
}
//���ӱ仯������ʱ��
function OnJZDayChanged()
{
    //ѡ�������
    var jzDay = Number(sJZDay.selectedIndex);
    //������ʼʱ����������ձ�
    var jzStartHH = ArrayDunRi[ jzDay%5 ];
    //��վ��б�
    sIxHour.length = 0;
    //���
    for(var i=0; i<12; i++)
    {
        addOp(sIxHour, i, JiaZi[ (jzStartHH+i) % 60 ]);
    }
}
//////////////////////////////////////////////

//���������ı�
var AllText = document.getElementById("AllText");
//
function CalcFanTuiPanPai()
{
    //����ѡ��
    //�Ա�
    var strGender = document.getElementById("sGender").value;
    // gBirthJingDu ��ȫ�ֱ�����������ȣ������ǳ���ʡ����
    var strBirthShengFen = "������";
    var strBirthShiXian = "�찲��";
    //��̫��ʱ
    var useZTY = 0;
    //�Ƿ���Ӹ߼�����
    var useJZGaoJi = Number( document.getElementById("sUseJZGaoJi").value );
    
    //��ȡ������ʱ
    var jzYear = Number( sJZYear.selectedIndex );
    var ixMonth = Number( sIxMonth.selectedIndex );
    var jzDay = Number( sJZDay.selectedIndex );
    var ixHour = Number( sIxHour.selectedIndex );
    //��ȡ���Ƶ���ʼ���
    var ftStartYear = Number(sFTStartYear.options[ sFTStartYear.selectedIndex ].value);
    
    //���㷴�Ƶ��������ӣ��������ֵС�� 0��˵��û���ҵ�
    var birthJD = GetFanTuiJD(ftStartYear, jzYear, ixMonth, jzDay, ixHour);
    if( birthJD < 0 )
    {
        alert("����ʱ���δ�ҵ��ð��֣�������������ֻ�ѡ������ʱ��Σ��ٽ��г��ԡ�");
        return;
    }
    //�ж��Ƿ���Ҫ��ͼ
    var bDraw = Number( document.getElementById("sDrawPic").value );
    //console.log(syCanvas); 
    //����
     //����Ϊ ���������ա��Ա�ʡ�ݡ����ء��Ƿ���̫�����Ƿ�߼��̣������ľ���
    AllText.innerHTML =  GetGLPaiPanHTML(birthJD, strGender, strBirthShengFen, strBirthShiXian, useZTY, useJZGaoJi, gBirthJingDu
            , bDraw, syCanvas);
    
    //ִ���Զ����Ƶ������壬IE9��Chrome֧�֣�������Բ��С�
    document.execCommand("selectAll");  //ȫѡ
    document.execCommand("copy");       //����
    document.execCommand("unselect");   //��ѡ�� 
}
