//������������ʱ��� 1583 �� �� 3199 �꣬�������������һ�굽3200ǰһ�꣬3200���Ƿ�Ϊ���������

//ʮ���
var TianGan = new Array("��","��","��","��","��","��","��","��","��","��");
//ʮ����֧
var DiZhi = new Array(
        "��",
        "��",
        "��",
        "î",
        "��",
        "��",
        "��",
        "δ",
        "��",
        "��",
        "��",
        "��"    
        );
//��֧�ظɱ� 0�Ǽף�������9�ǹ�
var DiZhiCangGan =
[//�����ŵ�һ��������������������û�е�д�� -1
    [9, -1, -1],  //�Ӳع�
    [5,  9,  7],  //��ؼ�����
    [0,  2,  4],  //���ؼױ���
    [1, -1, -1],  //î����
    [4,  1,  9],  //�������ҹ�
    [2,  6,  4],  //�Ȳر�����
    [3,  5, -1],  //��ض���
    [5,  3,  1],  //δ�ؼ�����
    [6,  8,  4],  //��ظ�����
    [7, -1, -1],  //�ϲ���
    [4,  7,  3],  //���������
    [8,  0, -1]   //�����ɼ�
];
//��֧��Ф��
var DZShengXiao =
[
    "��",
    "ţ",
    "��",
    "��",
    "��",
    "��",
    "��",
    "��",
    "��",
    "��",
    "��",
    "��"
];
//������ֱ�������ּ����ľ0������5�����ּ�5���Ǹɺ�
//��֧���ϣ�û�����ֹ���
//��0 ��1 ��2 î3 ��4 ��5
//��6 δ7 ��8 ��9 ��10 ��11
var DZLiuHe = 
[
    1, //��0 ��1 ��
    0, //��1 ��0 ��
    11,//��2 ��11��
    10,//î3 ��10��
    9, //��4 ��9 ��
    8, //��5 ��8 ��
    7, //��6 δ7 ��
    6, //δ7 ��6 ��
    5, //��8 ��5 ��
    4, //��9 ��4 ��
    3, //��10 î3 ��
    2  //��11 ��2 ��
];

//�����б�
var WuXing = new Array(
        "ľ",  //0
        "��",  //1
        "��",  //2
        "��",  //3
        "ˮ"   //4
        );
//���з�λ
var WXFangWei  = new Array
(
    "��",
    "��",
    "����",
    "��",
    "��"
);
//60����
var JiaZi  = new Array(
"����",
"�ҳ�",
"����",
"��î",
"�쳽",
"����",
"����",
"��δ",
"����",
"����",
"����",
"�Һ�",
"����",
"����",
"����",
"��î",
"����",
"����",
"����",
"��δ",
"����",
"����",
"����",
"����",
"����",
"����",
"����",
"��î",
"�ɳ�",
"����",
"����",
"��δ",
"����",
"����",
"����",
"����",
"����",
"����",
"����",
"��î",
"�׳�",
"����",
"����",
"��δ",
"����",
"����",
"����",
"����",
"����",
"���",
"����",
"��î",
"����",
"����",
"����",
"��δ",
"����",
"����",
"����",
"�ﺥ"
 );
 //����
 var NaYin = new Array(
"���н�",//����
"���н�",//�ҳ�
"¯�л�",//����
"¯�л�",//��î
"����ľ",//�쳽
"����ľ",//����
"·����",//����
"·����",//��δ
"�����",//����
"�����",//����
"ɽͷ��",//����
"ɽͷ��",//�Һ�
"����ˮ",//����
"����ˮ",//����
"��ǽ��",//����
"��ǽ��",//��î
"������",//����
"������",//����
"����ľ",//����
"����ľ",//��δ
"Ȫ��ˮ",//����
"Ȫ��ˮ",//����
"������",//����
"������",//����
"���׻�",//����
"���׻�",//����
"�ɰ�ľ",//����
"�ɰ�ľ",//��î
"����ˮ",//�ɳ�
"����ˮ",//����
"ɳ�н�",//����
"ɳ�н�",//��δ
"ɽ�»�",//����
"ɽ�»�",//����
"ƽ��ľ",//����
"ƽ��ľ",//����
"������",//����
"������",//����
"�𲭽�",//����
"�𲭽�",//��î
"���ƻ�",//�׳�
"���ƻ�",//����
"���ˮ",//����
"���ˮ",//��δ
"������",//����
"������",//����
"���˽�",//����
"���˽�",//����
"ɣ��ľ",//����
"ɣ��ľ",//���
"��Ϫˮ",//����
"��Ϫˮ",//��î
"ɳ����",//����
"ɳ����",//����
"���ϻ�",//����
"���ϻ�",//��δ
"ʯ��ľ",//����
"ʯ��ľ",//����
"��ˮ",//����
"��ˮ" //�ﺥ
);
//�������׷�λ��0�Ǽ�λ��1����λ
var NYJXFangWei = 
[
    ["��"  , "�ϣ���ƫλ��"],//����
    ["����", "�ϣ���ƫλ��"],//�ҳ�
    ["����", "������ƫλ��"],//����
    ["��"  , "������ƫλ��"],//��î
    ["��"  , "������ƫλ��"],//�쳽
    ["����", "������ƫλ��"],//����
    ["����", "������ƫλ��"],//����
    ["����", "������ƫλ��"],//��δ
    ["����", "�ϣ���ƫλ��"],//����
    ["��"  , "�ϣ���ƫλ��"],//����
    ["��"  , "������ƫλ��"],//����
    ["����", "������ƫλ��"],//�Һ�
    ["��"  , "����"],//����
    ["����", "����"],//����
    ["��"  , "������ƫλ��"],//����
    ["����", "������ƫλ��"],//��î
    ["����", "�ϣ���ƫλ��"],//����
    ["����", "�ϣ���ƫλ��"],//����
    ["��"  , "������ƫλ��"],//����
    ["����", "������ƫλ��"],//��δ
    ["��"  , "����"],//����
    ["����", "����"],//����
    ["��"  , "������ƫλ��"],//����
    ["����", "������ƫλ��"],//����
    ["��"  , "������ƫλ��"],//����
    ["����", "������ƫλ��"],//����
    ["��"  , "������ƫλ��"],//����
    ["����", "������ƫλ��"],//��î
    ["��"  , "����"],//�ɳ�
    ["����", "����"],//����
    ["����", "�ϣ���ƫλ��"],//����
    ["����", "�ϣ���ƫλ��"],//��δ
    ["��"  , "������ƫλ��"],//����
    ["����", "������ƫλ��"],//����
    ["��"  , "������ƫλ��"],//����
    ["����", "������ƫλ��"],//����
    ["��"  , "������ƫλ��"],//����
    ["��"  , "������ƫλ��"],//����
    ["��"  , "�ϣ���ƫλ��"],//����
    ["����", "�ϣ���ƫλ��"],//��î
    ["��"  , "������ƫλ��"],//�׳�
    ["����", "������ƫλ��"],//����
    ["��"  , "����"],//����
    ["��"  , "����"],//��δ
    ["��"  , "������ƫλ��"],//����
    ["��"  , "������ƫλ��"],//����
    ["����", "�ϣ���ƫλ��"],//����
    ["����", "�ϣ���ƫλ��"],//����
    ["��"  , "������ƫλ��"],//����
    ["����", "������ƫλ��"],//���
    ["��"  , "����"],//����
    ["����", "����"],//��î
    ["��"  , "������ƫλ��"],//����
    ["����", "������ƫλ��"],//����
    ["����", "������ƫλ��"],//����
    ["����", "������ƫλ��"],//��δ
    ["��"  , "������ƫλ��"],//����
    ["����", "������ƫλ��"],//����
    ["��"  , "����"],//����
    ["��"  , "����"]//�ﺥ
];

//���ұ����켺�����ɹ�
//�����������ԣ�ľ=0����=1����=2����=3��ˮ=4��
//30����������
var NaYinWuXing  = new Array
(	
    3,	//���н�
    1,	//¯�л�
    0,	//����ľ
    2,	//·����
    3,	//�����
    1,	//ɽͷ��
    4,	//����ˮ
    2,	//��ǽ��
    3,	//������
    0,	//����ľ
    4,	//Ȫ��ˮ
    2,	//������
    1,	//���׻�
    0,	//�ɰ�ľ
    4,	//����ˮ

    3,	//ɳ�н�
    1,	//ɽ�»�
    0,	//ƽ��ľ
    2,	//������
    3,	//�𲭽�
    1,	//���ƻ�
    4,	//���ˮ
    2,	//������
    3,	//���˽�
    0,	//ɣ��ľ
    4,	//��Ϫˮ
    2,	//ɳ����
    1,	//���ϻ�
    0,	//ʯ��ľ
    4	//��ˮ
);

//ũ������
var NLMonthName =
[
    "��",
    "��",
    "��",
    "��",
    "��",
    "��",
    "��",
    "��",
    "��",
    "ʮ",
    "ʮһ",
    "ʮ��"
];
var NLRunYue ="��";
//ũ����������
var NLDayName =
[
    "��һ",
    "����",
    "����",
    "����",
    "����",
    "����",
    "����",
    "����",
    "����",
    "��ʮ",
    "ʮһ",
    "ʮ��",
    "ʮ��",
    "ʮ��",
    "ʮ��",
    "ʮ��",
    "ʮ��",
    "ʮ��",
    "ʮ��",
    "��ʮ",
    "إһ",
    "إ��",
    "إ��",
    "إ��",
    "إ��",
    "إ��",
    "إ��",
    "إ��",
    "إ��",
    "��ʮ",
    "ئһ"
];
//�廢�����
var ArrayDunNian =
[
	2,		//�׼�֮������¿�ʼ
	14,		//�Ҹ�֮�������¿�ʼ
	26,		//����֮������¿�ʼ
	38,		//����֮�������¿�ʼ
	50		//���֮������¿�ʼ
];

//������ձ�
var ArrayDunRi =
[
	0,		//�׼�֮�ռ���ʱ��ʼ
	12,		//�Ҹ�֮�ձ���ʱ��ʼ
	24,		//����֮������ʱ��ʼ
	36,		//����֮�ո���ʱ��ʼ
	48		//���֮������ʱ��ʼ
];



//��һ������
var WeekDays =
[
    "��һ",
    "�ܶ�",
    "����",
    "����",
    "����",
    "����",
    "����"
];
//���������ռ������ڼ���ţ���0 �� 6
//2000��1��1��12�������������5
function GetiDayOfWeek(curJD)
{
    //��һ������������֤�����ģ���������7�ı���
    var delta = Math.floor(curJD - J2000 + 0.5) + 7000000;
    var dw = ((delta % 7) + 5 ) % 7;
    return dw;
}


 ///////////////////////////////////////////////////////
 //��ɫ��װ����������Ӵ� 
 //������ɫ
var ColorWuXing = new Array(
"green",    //ľ
"red",      //��
"#444444",  //��
"orange",     //��
"deepskyblue"  //ˮ
);
//�������з�װ�ı���ɫ���Զ��Ӵ�
function PackWuXingColorText(text, wx)
{
    var idWX = WuXing.indexOf(wx);
    var clr = "black";  //����鲻��������ž��ú�ɫ
    if( (idWX >= 0) && (idWX <= 4 ))
    {
        clr = ColorWuXing[idWX];
    };
    //
    var strResult =  "<b><span style=\"color: " + clr + "\">";
    strResult += text;
    strResult += "</span></b>";
    return strResult;
};

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
//�ո�
var SpaceZH = "&nbsp;"; //���ֿո�
var SpaceZHN = "��";    //���ַ��ո�
var SpaceEN1 = "&ensp;";//��Ӣ�ո�
var SpaceEN2 = "&emsp;";//˫Ӣ�ո�

//��ݺ��������������ֻ�ȡ������
function GetNianJiaZiShu(yy)
{
    //1504���ڳ�����Ч��Χ֮ǰ
    var iJZ = (yy - 1984 + 6000000) % 60;
    return iJZ;
}
//�������������̣����� bzpp ����
//���ּ����Ķ���ʱ�䶼��������
//bzpp.JDBirth ��ͨ����ʱ��
//bzpp.JDBirthZTY ����ʱ����̫��ʱ
//bzpp.Gender  �Ա��л�Ů
//bzpp.JingDuBirth  �����ؾ���
//bzpp.IsUseZTY       ʹ����̫��ʱ����

//bzpp.iNianJZ  //���������������
//bzpp.iYueJZ  //���������������
//bzpp.iRiJZ  //���������������
//bzpp.iShiJZ  //����ʱ���������

//bzpp.iTaiYuan ̥Ԫ
//bzpp.iMingGong ����

//bzpp.JQMing0  //ǰһ����������
//bzpp.JQJD0    //ǰһ������������
//bzpp.JQMing1  //��һ����������
//bzpp.JQJD1    //��һ������������
//bzpp.DaYunJD  //�������˵�������
//bzpp.isNiDaYun //�Ƿ������������
//
//ͨ�����̺����������ǳ�������ͨʱ�������ա��Ա𡢳����ؾ���
//���� bzpp ����
function CalcBaZiObject(jdBirth, gender, jingduBirth, isUseZTY)
{
    var bzpp = new Object();
    //�������еĶ�������
    bzpp.JDBirth = jdBirth; //����ʱ�䣬��������̫��
    bzpp.Gender = gender;
    bzpp.JingDuBirth = jingduBirth;
    bzpp.IsUseZTY  = isUseZTY;
    ///////////////////////////////////////
    ////��ȥ�������ļ�ʱ�����Ȱ�120��
    ////ԭ�����÷�ʽ obb.mingLiBaZi( jd+ (-8.0)/24 - J2000, 120.0/radd, ob ); //���ּ���
    //��������
    var jd = jdBirth - (8.0/24) - J2000;   //תΪUTC��J2000��
    var J = jingduBirth/radd; //���ȵĻ���
    /////////////////
    var v;//��ʱ����
    var jd2 = jd+dt_T(jd); //��ѧʱ
    var w = XL.S_aLon( jd2/36525, -1 ); //�˿�̫���ӻƾ�
    var k = int2( (w/pi2*360+45+15*360)/30 ); //1984����������Ľ�����(��������)
    jd += pty_zty2(jd2/36525)+J/Math.PI/2; //������̫��ʱ(ʹ�õ;����㷨����ʱ��)
    bzpp.JDBirthZTY = jd + J2000;//����J2000������

     var curDD; //���̵Ĺ���ʱ��
     var curJD; //���̵�������ʱ��
    //���������̫��ʱ��ֱ���ñ���ʱ��
    if( 0 == isUseZTY )
    {
        //������̫��
        jd  = jdBirth - J2000;
        curDD = JD.DD(jdBirth);//��������
        curJD = jdBirth;//������
    }
    else
    {
        //ʹ����̫��
        curDD = JD.DD(bzpp.JDBirthZTY);
        curJD = bzpp.JDBirthZTY;
    }
    
    jd += 13/24; //תΪǰһ��23������(ԭjdΪ��������12������)
    var D = Math.floor(jd), SC = int2( (jd-D)*12 ); //������ʱ��

    v = int2(k/12+6000000);  bzpp.iNianJZ = v % 60; //�����������
    v = k+2+60000000;        bzpp.iYueJZ = v % 60;
    v = D - 6 + 9000000;     bzpp.iRiJZ = v % 60;
    v = (D-1)*12+90000000+SC;bzpp.iShiJZ = v % 60;
    
    //////////////////////////////////////
    //�����б�
    //�ж�Ӧ�û�ȡ�����������ȥ������� 
    //���ֵļ������������������������˵������������֮ǰ
    var arrayJieQi;
    if( bzpp.iNianJZ != GetNianJiaZiShu(curDD.Y) )
    {
        arrayJieQi = GetJieQiArray( curDD.Y - 1 );//����ǰ��ȥ�������
    }
    else
    {
        arrayJieQi = GetJieQiArray( curDD.Y );//�������ý��������
    }
     ///////////////////////////////////
    //bzpp.JQMing0  //ǰһ����������
    //bzpp.JQJD0    //ǰһ������������
    //bzpp.JQMing1  //��һ����������
    //bzpp.JQJD1    //��һ������������
    //bzpp.DaYunJD  //�������˵�������
    //bzpp.isNiDaYun //�Ƿ������������
    //   
    //bzpp.iYueJZ ����������������֧����֧�� �ӳ���î����������
    //������Ŵ�2����10��ģ12����0�����ǽ��������
    var jqYueOrder =  (bzpp.iYueJZ % 12 + 10) % 12;
    //12����ڣ����24����������Ҫ����2
    bzpp.JQMing0 = JieQiMing[ jqYueOrder*2 ];
    bzpp.JQJD0 = arrayJieQi[ jqYueOrder*2 ];
    //��һ������
    bzpp.JQMing1 = JieQiMing[ jqYueOrder*2 + 2 ];//��һ������Ǽ�2����1��������
    bzpp.JQJD1 = arrayJieQi[ jqYueOrder*2 + 2 ];
    //�жϴ���˳��
    //�������
    if( bzpp.iNianJZ % 2 == 0) //����0������
    {
        //���꣬��˳��Ů��
        if( "Ů" == gender ) //Ů
        {
            bzpp.isNiDaYun = 1; //Ů��
        }
        else
        {
            bzpp.isNiDaYun = 0; //��˳
        }
    }
    else
    {
        //���꣬���棬Ů˳
        if( "Ů" == gender ) //Ů
        {
            bzpp.isNiDaYun = 0; //Ů˳
        }
        else
        {
            bzpp.isNiDaYun = 1;
        }
    }
    //˳��
    if( 0 == bzpp.isNiDaYun )
    {
        //˳�м������ˣ�һ�� 365.2422 �죬����������һ��
        //˳�м����ֵ�Ǻ������������ʱ��
        var deltaShun = bzpp.JQJD1 - curJD; //��ֵ����
        //console.log("˳������" + deltaShun);
        //תΪ��������
        var qiyunShun = (deltaShun / 3.0) *  365.2422 ;
        bzpp.DaYunJD = curJD + qiyunShun;
    }
    else
    {
        //���м�������
        var deltaNi = curJD - bzpp.JQJD0 ;  //���д��˽�����ֵ����
        //console.log("��������" + deltaNi);
        //תΪ��������
        var qiyunNi = (deltaNi / 3.0) * 365.2422 ;
        bzpp.DaYunJD = curJD + qiyunNi;        
    }
    /////////////////////////////////////////////
    //̥Ԫ�������������9������ǰ���ʮ����
    bzpp.iTaiYuan = ( bzpp.iYueJZ - 9 + 60 ) % 60;
    
    //����1�������ٲ鷨������������
    // ��1��î2������������11����12���ȼ����·ݵ�
    var nMCount = (bzpp.iYueJZ % 12) - 1; //ԭ����Ϊ0����Ϊ1����Ϊ2������1
    if( nMCount <= 0 )
    {
        nMCount += 12;  //��11������12
    }
    //�ټ���ʱ����
    var nHCount = (bzpp.iShiJZ % 12) - 1;
    if( nHCount <= 0 )
    {
        nHCount += 12;
    }
    
    //����������֧����1��12
    var nMGDZ = 14 - ( nMCount + nHCount );
    if( nMGDZ < 1)
    {
        nMGDZ += 12;    //С��1�ı��1��12��
    }
    //�廢���꣬���¸�
    var nYearOrder = (bzpp.iNianJZ) % 5;
    var nMG = ArrayDunNian[nYearOrder] + (nMGDZ-1);
    bzpp.iMingGong = (nMG % 60);    //60��Χ֮��
    
    //����
    return bzpp;
}
//���������Ŀ�����֧�������ַ���
function GetRiKongWang(iRiJZ)
{
    //������ʼ����Ѯ
    var nStartJZXun = iRiJZ - (iRiJZ % 10);
    var iKong1 = ((nStartJZXun + 10) % 60) % 12;
    var iKong2 = (iKong1+1)%12;
    var strRet = "���տգ�" + DiZhi[iKong1] + "��"
                    + DiZhi[iKong2] + "��";
    return strRet;
}
//���ݵ�֧�����ص�֧�ظ��ַ���
function GetDiZhiCangGan(iDiZhi)
{
    var strRet = "";
    //����
    strRet += GetBoldText( GetDarkOrchidText( TianGan[ DiZhiCangGan[iDiZhi][0] ] ) );
    //�Ƿ�������
    if( DiZhiCangGan[iDiZhi][1] >= 0)
    {
        strRet += TianGan[ DiZhiCangGan[iDiZhi][1] ];
    }
    else
    {
        strRet += SpaceEN2;
    }
    //�Ƿ�������
    if( DiZhiCangGan[iDiZhi][2] >= 0 )
    {
        strRet += TianGan[ DiZhiCangGan[iDiZhi][2] ];
    }
    else
    {
        strRet += SpaceEN2;
    }
    return strRet;
}

//
//��ȡ��ͨ��������
function GetPuTongSuiYun(bzpp)
{
    //�ַ���
    var strRet = "";
    var strTemp = "";
    //���˲��ٵļ�¼���洢��������� 2008
    var syblArray = new Array();
    var syblCount = 0;
    //���յĹ����ṹ��
    var birthDD;
    if( 0 == bzpp.IsUseZTY )//������̫��
    {
        birthDD = JD.DD( bzpp.JDBirth );
    }
    else//����̫��
    {
        birthDD = JD.DD( bzpp.JDBirthZTY );
    }
    //����ʱ��
    var qiyunDD = JD.DD( bzpp.DaYunJD );
    var qiyunZhouSui =  qiyunDD.Y - birthDD.Y ;
    strTemp = "�������꣺" + String( qiyunZhouSui )
        + SpaceEN2   + "���˹�����" 
        + String(qiyunDD.Y) + "��"
        + String(qiyunDD.M) + "��"
        + String(qiyunDD.D) + "��"
        + "��ÿ��ʮ������һ�����ˣ�" ;
    strRet += strTemp;
    strRet += "<br>";
    strRet += "<br>";
    //�������˼������
    var iQiYunJZ;
    var iYunDelta = 0;  //����˳���� +1�������� -1
    if( 0 == bzpp.isNiDaYun )//˳��
    {
        iQiYunJZ = (bzpp.iYueJZ + 1 + 60) % 60;
        iYunDelta = 1;
    }
    else//����
    {
        iQiYunJZ = (bzpp.iYueJZ - 1 + 60) % 60;
        iYunDelta = -1;
    }
    //���깫���ꡢ���������
    var qiyunGLNian = qiyunDD.Y ;
    var iQiYunGLNianJZ = GetNianJiaZiShu(qiyunGLNian);
    //��ʼ�Ŵ���
    var strDaYunJiaZi = "����" + SpaceEN2;
    var strDaYunNaYin = "����" + SpaceEN2 ;
    var strDaYunZhouSui = "����" + SpaceEN2 + SpaceEN2;
    var strDaYunQiNian = "����" + SpaceEN2 ;
    var strDaYunZhiNian = "ֹ��" + SpaceEN2 ;
    var arrayDaYunJiaZi = new Array(8); //�˲����˵ļ�����
    for(var i=0; i<8; i++)//���������Ϣ�ַ���
    {
        arrayDaYunJiaZi[i] = (iQiYunJZ + i*iYunDelta + 60) % 60;
        strDaYunJiaZi += JiaZi[ arrayDaYunJiaZi[i] ] + SpaceEN2 + SpaceEN2;
        strDaYunNaYin += NaYin[ arrayDaYunJiaZi[i] ] + SpaceEN2;
        strDaYunZhouSui += PackSmallNumber(String(qiyunZhouSui + i * 10)) + SpaceEN2 + SpaceEN2 + SpaceEN2;
        strDaYunQiNian += PackSmallNumber(String( qiyunGLNian + i * 10)) + SpaceEN2 + SpaceEN2;
        strDaYunZhiNian += PackSmallNumber(String( qiyunGLNian + 9 + i * 10)) + SpaceEN2 + SpaceEN2;
    }
    //��ӵ������
    strRet += GetRedText(strDaYunJiaZi) + "<br>" ;
    strRet += strDaYunNaYin + "<br>" ;
    strRet += strDaYunZhouSui + "<br>" ;
    strRet += strDaYunQiNian + "<br>" ;
    strRet += "����<br>" ;

    //����forѭ�������˲����˵�����
    for(var j=0; j<10; j++) //��ʮ��
    {
        var strCurLine = "+" + String(j) + SpaceEN2 + SpaceEN2;
        for(var i=0; i<8; i++)//������
        {
            //��ǰ��ݼ�����
            var curYJZ = (iQiYunGLNianJZ + j + i*10) % 60;
            strCurLine += JiaZi[curYJZ] + SpaceEN2 + SpaceEN2;
            //�Ƿ����˲���
            if( curYJZ == arrayDaYunJiaZi[i]) //���˲���
            {
                syblArray[ syblCount ] = qiyunGLNian + j + i*10;
                syblCount++;
            }
        }
        strRet +=  strCurLine + "<br>";        
    }
    //����ֹ��
    strRet += strDaYunZhiNian + "<br>" ;
    strRet += "<br>" ;
    //�������˲����ж�
    strTemp = "";
    if( syblCount > 0 )
    {
        for(var k=0; k<syblCount; k++)
        {
            strTemp += String( syblArray[k] ) + JiaZi[ GetNianJiaZiShu(syblArray[k]) ];
            strTemp += SpaceEN2;
            strTemp = GetBoldText(strTemp);
        }
    }
    strRet += "���˲��٣�" + strTemp;
    strRet += "<br>" ;    
    return strRet;
}
//�ж��ֻ�ϵͳ
var gIsPhone = false;
CheckIsPhone(); //�ж�һ���Ƿ�Ϊ�ֻ������
function CheckIsPhone()
{
    //ֻ�ж�windowsϵͳ���������������ֻ���
    if( navigator.platform == "Win32" || navigator.platform == "Windows" )
    {
        gIsPhone = false;
    }
    else
    {
        gIsPhone = true;
    }
    //alert(navigator.platform);
}
function PackSmallNumber(text) //��Ӧ�ֻ��Ű棬������ʾСһЩ
{
    var strRet = "";
    if(gIsPhone)//�ֻ�������С����
    {
        if(text.length >= 4)
        {
            strRet += "<span style='margin-left:-3.5px;'>";
        }
        else
        {
            strRet += "<span style='margin-left:-2px;'>";
        }
    }
    else //��ͨ��������
    {
        strRet += "<span style='font-size: 100%;'>";
    }

    strRet += text;
    strRet += "</span>";
    return strRet;
}

//bzpp.iNianJZ  //���������������
//bzpp.iYueJZ  //���������������
//bzpp.iRiJZ  //���������������
//bzpp.iShiJZ  //����ʱ���������

//bzpp.JQMing0  //ǰһ����������
//bzpp.JQJD0    //ǰһ������������
//bzpp.JQMing1  //��һ����������
//bzpp.JQJD1    //��һ������������
//bzpp.DaYunJD  //�������˵�������
//bzpp.isNiDaYun //�Ƿ������������
//��ȡ�߼���������
function GetGaoJiSuiYun(bzpp)
{
    //�ַ���
    var strRet = "";
    var strTemp = "";
    //���˲��ٵļ�¼���洢��������� 2008
    var syblArray = new Array();
    var syblCount = 0;
    //���յĹ����ṹ��
    var birthDD;
    if( 0 == bzpp.IsUseZTY )//������̫��
    {
        birthDD = JD.DD( bzpp.JDBirth );
    }
    else//����̫��
    {
        birthDD = JD.DD( bzpp.JDBirthZTY );
    }
    //�߼��̲��ܽ�������������
    strTemp = "�������꣺0" + SpaceEN2 
        + "����ʱ�䣺����������ʱ��" + "<br>"
        + "�����Ӹ߼����̳�������д��ˣ�ÿʮ���껻���ˣ�������˺��ͷ�ֻأ�";
    strRet += strTemp;
    strRet += "<br>" ;
    strRet += "<br>" ;
    //�������˼������
    var iQiYunJZ;
    var iYunDelta = 0;  //����˳���� +1�������� -1
    if( 0 == bzpp.isNiDaYun )//˳��
    {
        iQiYunJZ = (bzpp.iYueJZ + 1 + 60) % 60;
        iYunDelta = 1;
    }
    else//����
    {
        iQiYunJZ = (bzpp.iYueJZ - 1 + 60) % 60;
        iYunDelta = -1;
    }
    //���깫���ꡢ���������
    var qiyunGLNian = birthDD.Y ;
    var iQiYunGLNianJZ = GetNianJiaZiShu(qiyunGLNian);
    //��ʼ�Ŵ���
    var strDaYunJiaZi = "����" + SpaceEN2;
    var strDaYunNaYin = "����" + SpaceEN2 ;
    var strDaYunZhouSui = "����" + SpaceEN2 + SpaceEN2;
    var strDaYunQiNian = "����" + SpaceEN2 ;
    var strDaYunZhiNian = "ֹ��" + SpaceEN2 ;
    var arrayDaYunJiaZi = new Array(8); //�˲����˵ļ�������5��ѭ��
    for(var i=0; i<8; i++)//���������Ϣ�ַ���
    {
        //5 �� ����ѭ����12�껻����
        arrayDaYunJiaZi[i] = (iQiYunJZ + (i%5)*iYunDelta + 60) % 60;
        strDaYunJiaZi += JiaZi[ arrayDaYunJiaZi[i] ] + SpaceEN2 + SpaceEN2;
        strDaYunNaYin += NaYin[ arrayDaYunJiaZi[i] ] + SpaceEN2;
        strDaYunZhouSui += PackSmallNumber(String( 0 + i * 12)) + SpaceEN2 + SpaceEN2 + SpaceEN2;
        strDaYunQiNian += PackSmallNumber(String( qiyunGLNian + i * 12)) + SpaceEN2 + SpaceEN2;
        strDaYunZhiNian += PackSmallNumber(String( qiyunGLNian + 11 + i * 12)) + SpaceEN2 + SpaceEN2;
    }
    //��ӵ������
    strRet += GetRedText(strDaYunJiaZi) + "<br>" ;
    strRet += strDaYunNaYin + "<br>" ;
    strRet += strDaYunZhouSui + "<br>" ;
    strRet += strDaYunQiNian + "<br>" ;
    strRet += "����<br>" ;
    
    //����forѭ�������˲����˵�����
    for(var j=0; j<12; j++) //��12��
    {
        var strCurLine = "+" + String(j);
        if( 10 == j)//��λ���֣��������
        {
            strCurLine = "10" ;
        }
        if( 11 == j)//��λ���֣��������
        {
            strCurLine = "11";
        }
        strCurLine += SpaceEN2 + SpaceEN2;
        for(var i=0; i<8; i++)//������
        {
            //��ǰ��ݼ�����
            var curYJZ = (iQiYunGLNianJZ + j + i*12) % 60;
            strCurLine += JiaZi[curYJZ] + SpaceEN2 + SpaceEN2;
            //�Ƿ����˲���
            if( curYJZ == arrayDaYunJiaZi[i]) //���˲���
            {
                syblArray[ syblCount ] = qiyunGLNian + j + i*12;
                syblCount++;
            }
        }
        strRet +=  strCurLine + "<br>";        
    }
    //����ֹ��
    strRet += strDaYunZhiNian + "<br>" ;
    strRet += "<br>" ;
    //�������˲����ж�
    strTemp = "";
    if( syblCount > 0 )
    {
        for(var k=0; k<syblCount; k++)
        {
            strTemp += String( syblArray[k] ) + JiaZi[ GetNianJiaZiShu(syblArray[k]) ];
            strTemp += SpaceEN2;
            strTemp = GetBoldText(strTemp);
        }
    }
    strRet += "���˲��٣�" + strTemp;
    strRet += "<br>" ;    
    
    return strRet;
}
//��ȡ�������׷�λ�ַ���
function GetNaYinFangWei(bzpp)
{
    var strRet = "�����۷�λ����<b>�Գ�����Ϊ���룬ĳ��λ����ָ�����ص�ĳ��λ</b>��<br>";
    var strTemp = "";
    //��������ҵ��λ
    var iYYJZ = bzpp.iNianJZ;
    strTemp = "��ҵ��λ��<b>" + NYJXFangWei[iYYJZ][0] + "</b><br>";
    strRet += strTemp;
    //�������ʺ�ְҵ�Լ���Ԫ��λ
    var iDDJZ = bzpp.iRiJZ; //��λ����60�У��������б� 30��
    var iDDWuXing = NaYinWuXing[ Math.floor(iDDJZ/2) ];
    strTemp = "�ʺ�ְҵ��<b>������" + WuXing[ (iDDWuXing+4)%5 ]
            + "��" + WuXing[ iDDWuXing ] + "</b>�����ȡ����Ҳ���鲹���������У�<br>" ;
    strRet += strTemp;
    strTemp = "��Ԫ��λ��<b>" + NYJXFangWei[iDDJZ][0] + "</b><br>";
    strRet += strTemp;
    
    //ʱ��
    var iHHJZ = bzpp.iShiJZ;
    var iHHWuXing = NaYinWuXing[ Math.floor(iHHJZ/2) ];
    //�ж���ʱ��ͷ��
    if( (iDDWuXing+3)%5 == iHHWuXing )//ľ������ˮ
    {
        strTemp = "���׷�λ��" +  NYJXFangWei[iDDJZ][1] + "��������ʱ��ͷ�ˣ����׷�λ����ȥ�������������Ԫ��λ���ӡ�<br>" ;
        strRet += GetBoldText( GetRedText(strTemp) );
    }
    
    return strRet;
}

//����ԭ�ֵĵ��� �� �����ķ�ֵ
function CalcYuanJuDanZhuPoints(nDstZhuJZ, nRiZhuJZ)
{
    var dblRet = 0;
    //Ŀ����������
    var nDstWX = NaYinWuXing[ Math.floor(nDstZhuJZ / 2) ];
    //����������
    var nRiWX = NaYinWuXing[ Math.floor(nRiZhuJZ / 2) ];
    //��������֮��
    var nCha = ((nDstWX - nRiWX) + 5) % 5;
    
    //Ŀ����������
    var nDstYinYang = nDstZhuJZ % 2;
    //��������
    var nRiYinYang = nRiZhuJZ % 2;
    
    //�������в� �����ж�
    switch ( nCha ) {
    case 0: //ͬ����
        if( nDstYinYang != nRiYinYang )    //������
        {
            dblRet = 8;
        }
        else
        {
            dblRet = 7;
        }
        break;
    case 1: //����
        if( nDstYinYang != nRiYinYang ) //����й
        {
            dblRet = 3;
        }
        else
        {
            dblRet = 4;
        }
        break;
    case 2: //�ҿ�
        if( nDstYinYang != nRiYinYang ) //������
        {
            dblRet = 6;
        }
        else
        {
            dblRet = 5;
        }
        break;
    case 3: //����
        if( nDstYinYang != nRiYinYang ) //�����ܿ�
        {
            dblRet = 2;
        }
        else
        {
            dblRet = 1;
        }
        break;
    case 4: //����
        if( nDstYinYang != nRiYinYang ) //������
        {
            dblRet = 10;
        }
        else
        {
            dblRet = 9;
        }
        break;
    default:
        break;
    }
    //����
    return dblRet;
}

//��ȡԭ��Ԫ��������Զ��ж� ��ǿ�ֺ���ǿ�֡���֮����
function CalcYuanShenQiangDuObject(bzpp)
{
    var aYuanShen = new Object();
    aYuanShen.yuanshen = -1;    //Ԫ�����
    aYuanShen.n3QiangJu = -1;   //��ǿ��
    aYuanShen.n4QiangJu = -1;   //��ǿ��
    aYuanShen.nTianZhiJiaoZi = -1; //��֮����
     /**�������������ķ�ֵ**********************************************/
    //�� 0.10
    var dblYearP = CalcYuanJuDanZhuPoints(bzpp.iNianJZ, bzpp.iRiJZ);
    //�� 0.35
    var dblMonthP = CalcYuanJuDanZhuPoints(bzpp.iYueJZ, bzpp.iRiJZ);
    //ʱ 0.55
    var dblHourP = CalcYuanJuDanZhuPoints(bzpp.iShiJZ, bzpp.iRiJZ);
    //�����ۺϷ� 1~10
    var dblSanZhuP = dblYearP*0.10 + dblMonthP*0.35 + dblHourP*0.55;
    
    //�ȼ����������и�����������ǿ�ֺ���ǿ���ж�
    //ľ������ˮ
    var aWuXingCount = [0, 0, 0, 0, 0];
    //����������
    var nYearWX = NaYinWuXing[ Math.floor(bzpp.iNianJZ/2) ];
    aWuXingCount[nYearWX] += 1;
    //����������
    var nMonthWX = NaYinWuXing[ Math.floor(bzpp.iYueJZ/2) ];
    aWuXingCount[nMonthWX] += 1;
    //����������
    var nDayWX =  NaYinWuXing[ Math.floor(bzpp.iRiJZ/2) ];
    aWuXingCount[nDayWX] += 1;
    //ʱ��������
    var nHourWX = NaYinWuXing[ Math.floor(bzpp.iShiJZ/2) ];
    aWuXingCount[nHourWX] += 1;
    
    //�ж����и���
    for(var i=0; i<5; i++)
    {
        if( aWuXingCount[i] >= 3)//��ǿ��
        {
            aYuanShen.n3QiangJu = i;    //i������ǿ������
            //�Ƿ�Ϊ��ǿ��
            if( aWuXingCount[i] >= 4 )
            {
                aYuanShen.n4QiangJu = i;
            };
            if( (aYuanShen.n3QiangJu+1)%5 == nDayWX) //��������������� ��ǿ���м�1.��������������֮����
            {
                 aYuanShen.nTianZhiJiaoZi = nDayWX; //��¼��֮�����������У������������ж��� aYuanShen.n3QiangJu
            };
            //���ҵ���ǿ�֣��˳�ѭ��
            break;
        }
        else
        {
            continue;
        }
    }
    //�ж�����ǿ�ֻ�����ͨ��
    if( aYuanShen.n3QiangJu >= 0 )//ǿ��
    {
        aYuanShen.yuanshen = Math.floor(70 + 3.0 * dblSanZhuP + 0.5); //��������
        //ǿ�ֵ����¡����ջ�ͷ��Ӱ�첻̫�󣬲��������ˡ�
    }
    else//��ͨ��
    {
        //��������˳���Ľ�������
        var dblPlus = 0.0;
        //�ж�
        if(   (nYearWX+1)%5 == nMonthWX
           && (nMonthWX+1)%5 == nDayWX)
        {
            //dblSanZhuP��ֵԽ�ߣ��ӵ�Խ�١���ֵԽ�ͼӵ�Խ�࣬����6.2*1.6 = 10��
            dblPlus = (10.0 - dblSanZhuP) * 1.6;
        };
        //����
        aYuanShen.yuanshen = Math.floor( 10.0 * dblSanZhuP + dblPlus + 0.5);  //��������
        //���ϼ���������ǵ���ʱ���������Ļ�ͷ��(������ͷ֣������ټ�)���¿�����տ��µļ���û��������
        //�������������ܿ˵����ֽ�������������˿� 9 �� 10 �֣� �����˿� 9 �� 10 ��
        //����ͨ�ֻ�ͷ������
        if( (nYearWX+3)%5 == nMonthWX )    //�����
        {
            if( (bzpp.iNianJZ)%2 == (bzpp.iYueJZ)%2 )  //ͬ�Կ�
            {
                aYuanShen.yuanshen -= 10;
            }
            else
            {
                aYuanShen.yuanshen -= 9;
            }
        };
        if( (nMonthWX+3)%5 == nDayWX ) //������
        {
            if( (bzpp.iYueJZ)%2 == (bzpp.iRiJZ)%2 )  //ͬ�Կ�
            {
                aYuanShen.yuanshen -= 10;
            }
            else
            {
                aYuanShen.yuanshen -= 9;
            }
        };
        //����10�ֵĶ���10������//��ͷ�10��
        if(aYuanShen.yuanshen < 10)
        {
            aYuanShen.yuanshen = 10;
        };
    }//��ͨ�ּ������
    
    //����Ԫ�����
    return aYuanShen;
}
/*
    aYuanShen.yuanshen    //Ԫ�����
    aYuanShen.n3QiangJu  //��ǿ��
    aYuanShen.n4QiangJu  //��ǿ��
    aYuanShen.nTianZhiJiaoZi //��֮����
*/
//Ԫ��ǿ�����ַ���
var strQiangRuo =
[
    "����",// <=30
    "����",// 31 -- 48
    "�е�",// 49 -- 66
    "��ǿ",// 65 -- 84
    "��ǿ" // >= 85 
];
//����Ԫ����󣬹���Ԫ�������ַ���
function GetYuanShenString(aYuanShen)
{
    var strRet = "Ԫ��ǿ�ȣ�";
    var strTemp = String( aYuanShen.yuanshen ) + SpaceEN2+ SpaceEN2;
    var strqr = "";    //����ǿ�����ַ���
    //���ж���ͨ��
    if(aYuanShen.yuanshen <= 30)
    {
        strqr = strQiangRuo[0];
    }
    else if(aYuanShen.yuanshen <= 48)
    {
        strqr = strQiangRuo[1];
    }
    else if(aYuanShen.yuanshen <= 66)
    {
        strqr = strQiangRuo[2];
    }
    else if(aYuanShen.yuanshen <= 84)
    {
        strqr = strQiangRuo[3];
    }
    else // >=85
    {
        strqr = strQiangRuo[4];
    }
    //ǿ���ж�
    if( aYuanShen.n4QiangJu >=0 )   //��ǿ��
    {
        strqr = "�۰�һ��";
    }
    else if( aYuanShen.n3QiangJu >=0 )  //��ǿ�ֺ���֮����
    {
        strqr = "��" + WuXing[aYuanShen.n3QiangJu] + "ǿ��" ;
        if( aYuanShen.nTianZhiJiaoZi >=0 ) //��ǿ��Ԫ��//��֮����
        {
            strqr = "��֮����";
        }
    };
    //����ǿ������
    strTemp += strqr;
    strRet += GetBoldText( GetRedText(strTemp) );
    strRet += "<br>ע��Ԫ���ǿ��Ӱ���˵ľ�����״̬������������������ֵ���������п��Լ�ǿ�Լ�������Ԫ��Խǿ���˵����������������Ե�Խ��<br>";
    //����
    return strRet;
}

//�������̺���
//����Ϊ ���������ա��Ա�ʡ�ݡ����ء��Ƿ���̫�����Ƿ�߼��̣������ľ���//��������������ǻ�ͼ����
function  GetGLPaiPanHTML(birthJD, strGender, strBirthShengFen, strBirthShiXian, useZTY, useJZGaoJi, jingdu, bDraw, syCanvas)
{
    if(  birthJD < 0)
    {
        return "<br>ʱ��β��ԣ��޷����а������̡�<br>";
    }
    //���̵�HTML�ַ���
    var strResult =  "<div align='left' style='font-family: ����;'>"; 
    var strTemp = "";
    //������ JD ����涫����Ҫ�� DD��JD����������������б��޸ģ�DD���¶��󣬲��ᱻ��
    var myDD = JD.DD(birthJD);
    //console.log("birthJD: " + birthJD);
    //console.log( myJD.JD2str(birthJD) );
    //���а�������
    var bzpp = CalcBaZiObject(birthJD, strGender, jingdu, useZTY);
    
    //�����б�ǿ�ʼ
    strResult += "<span style='white-space: nowrap;'>";
    //��ʼ��������ַ���
    strTemp = "������ĳ�ˣ� �Ա�<b>" + strGender 
            + "</b>�� ����Ф��<b>" + DZShengXiao[bzpp.iNianJZ%12]
            + "</b>�� �����أ�" + strBirthShengFen + strBirthShiXian;
    strResult += strTemp;
    strResult += "<br>";
    //�����������Ƿ���̫��ʱ
    strTemp = "����������" + String(myDD.Y) + "��" 
        + String(myDD.M) + "��"
        + String(myDD.D) + "��"
        + String(myDD.h) + "ʱ"
        + String(myDD.m) + "��"
        + "�� " + WeekDays[ GetiDayOfWeek(birthJD) ]  ;
    //console.log( GetiDayOfWeek(birthJD) );
    strResult += strTemp;
    strResult += "<br>";
    if( 0 != useZTY )//�ж���̫��ʱ�����ʹ������̫��ʱ��������붼������̫��ʱ��
    {
        var glZTY = JD.DD( bzpp.JDBirthZTY ); //������תΪ����
        strTemp = "��̫��ʱ��" + glZTY.Y + "��" 
            + glZTY.M + "��"
            + glZTY.D + "��"
            + glZTY.h + "ʱ"
            + glZTY.m + "��"  ;
        strResult += strTemp;
        strResult += "<br>";
        //�ѳ���ʱ������Ϊ��̫���Ķ���
        myDD = glZTY;   //��������ũ����ѯ
        birthJD = bzpp.JDBirthZTY;  //�ĳ���̫����
    }

    //����ũ����0���ǽ������ʱ��23������������ʱ��Ҫ����
    var theOB;
    if(myDD.h >= 23)//ũ��ʱ�䣬myDD��birthJD���޸��ˣ��Զ������Ƿ�����̫��ʱ��
    {
        theOB = GetJDtoNongLiOB(birthJD + 1);
    }
    else
    {
        theOB = GetJDtoNongLiOB(birthJD);
    }
    strTemp = "����ũ����" + theOB.Lyear3 + "�� "
              + theOB.Lleap + theOB.Lmc + "�� "
              + theOB.Ldc + "�� "
              + DiZhi[ (Math.floor((myDD.h+1)/2 )) % 12 ] + "ʱ"
              + " ���Ƶ�" + String( theOB.Lyear0 + 1984 + 2698 + 56 ) + "�꣩";//�Ƶۼ�������϶�56��
    //console.log( myDD.h );
    strResult += strTemp;
    strResult += "<br>";
    strResult += "<br>";
    //����    
    if( "Ů" ==  bzpp.Gender)
    {
        strTemp = "����" + SpaceEN2;
        strTemp += GetBoldText(GetFuchsiaText(JiaZi[bzpp.iNianJZ])) + SpaceEN2 + SpaceEN2 + SpaceEN2
        +  GetBoldText(GetFuchsiaText(JiaZi[bzpp.iYueJZ]))  + SpaceEN2 + SpaceEN2 + SpaceEN2
        +  GetBoldText(GetFuchsiaText(JiaZi[bzpp.iRiJZ]))  + SpaceEN2 + SpaceEN2 + SpaceEN2
        +  GetBoldText(GetFuchsiaText(JiaZi[bzpp.iShiJZ])) ;
    }
    else
    {
        strTemp = "Ǭ��" + SpaceEN2;
        strTemp += GetBoldText(GetBlueText(JiaZi[bzpp.iNianJZ])) + SpaceEN2 + SpaceEN2 + SpaceEN2
        + GetBoldText(GetBlueText(JiaZi[bzpp.iYueJZ])) + SpaceEN2 + SpaceEN2 + SpaceEN2
        + GetBoldText(GetBlueText(JiaZi[bzpp.iRiJZ])) + SpaceEN2 + SpaceEN2 + SpaceEN2
        + GetBoldText(GetBlueText(JiaZi[bzpp.iShiJZ])) ;
    }
    strTemp += SpaceEN2 + GetRiKongWang( bzpp.iRiJZ );
    strResult += strTemp;
    strResult += "<br>";
    //��֧�ظ�
    strTemp = "�ظ�" + SpaceEN2;
    strTemp +=  SpaceEN2 + GetDiZhiCangGan( bzpp.iNianJZ % 12) + SpaceEN2
        + SpaceEN2 + GetDiZhiCangGan( bzpp.iYueJZ % 12) + SpaceEN2
        + SpaceEN2 + GetDiZhiCangGan( bzpp.iRiJZ % 12) + SpaceEN2
        + SpaceEN2 + GetDiZhiCangGan( bzpp.iShiJZ % 12);
    strResult += strTemp;
    strResult += "<br>";
    //����
    strTemp = "����" + SpaceEN2;
    strTemp +=  GetBlackText( NaYin[bzpp.iNianJZ] ) + SpaceEN2 + SpaceEN2
    +  GetBlackText( NaYin[bzpp.iYueJZ] ) + SpaceEN2 + SpaceEN2
    +  GetBlackText( NaYin[bzpp.iRiJZ] ) + SpaceEN2 + SpaceEN2
    +  GetBlackText( NaYin[bzpp.iShiJZ] ) ;
    strResult += strTemp;
    strResult += "<br>";
    strResult += "<br>";
    //̥Ԫ������
    strTemp = "̥Ԫ��" + JiaZi[ bzpp.iTaiYuan ] + "��" + NaYin[ bzpp.iTaiYuan ] + "��"
        + SpaceEN2 
        + "������" + JiaZi[ bzpp.iMingGong ] + "��" + NaYin[ bzpp.iMingGong ] + "��" ;
    strResult += strTemp;
    strResult += "<br>";
    strResult += "<br>";
    //����
    strTemp = "����������" + bzpp.JQMing0 + JD.JD2str(bzpp.JQJD0)
        +  SpaceEN2 + SpaceEN2
        + bzpp.JQMing1 + JD.JD2str(bzpp.JQJD1);
    strResult += strTemp;
    strResult += "<br>";
    //�Ŵ����ַ���
    //������ͨ���̺͸߼�����
    if( 0 == useJZGaoJi)
    {
        //��ͨ�̣���ȡ��ͨ�������̣�10��* 8��
        strTemp = GetPuTongSuiYun(bzpp);
    }
    else
    {
        //�߼��̣���ȡ�߼��������̣�12��*5��
        strTemp = GetGaoJiSuiYun(bzpp);
    }
    strResult += strTemp;
    strResult += "<br>";
    
    //�������׷�λ
    strResult += GetNaYinFangWei(bzpp);
    strResult += "<br>";
    
    strResult += "</span>"; //�����б�ǵ�ĩβ
    
    //�ȼ���Ԫ�����
    var aYuanShen = CalcYuanShenQiangDuObject(bzpp);
    
    strResult += GetYuanShenString(aYuanShen);    
    
    strResult += "<br>";
    //����ĩβ�ı�ǩ
    strResult += "</div>";
    //�滻���Ŀո���Ӧ�����ֻ����������
    strResult = strResult.replace(/&emsp;/g, "��");
     
    //��ͼ
    var painter = syCanvas.getContext("2d");
    //console.log(painter);
    if( (1==bDraw) && painter ) //�ж��Ƿ��ͼ�����޻���
    {
        syCanvas.width = 640;   //���󻭲�
        syCanvas.height = 600;
        if( 0 == useJZGaoJi )
        {
            //��ͨ���̻�ͼ
            DrawPuTongSuiYun(bzpp, aYuanShen, painter);
        }
        else
        {
            //�߼����̻�ͼ
            DrawGaoJiSuiYun(bzpp, aYuanShen, painter);
        }
    }
    
    //����
    return strResult;
}
//ѡ�ð�����ɫ�����ˣ���������
var DaYunColors = [
    "#FF4500",
    "#00FA9A",
    "#E9967A",
    "#00FFFF",
    "#FF8C00",   
    "#7FFF00",
    "#D02090",
    "#32CD32"
];

//��ͨ���˻�ͼ�����������ǰ������̡�Ԫ����󡢻�ͼ��
function DrawPuTongSuiYun(bzpp, aYuanShen, painter)
{
    //�ߴ�
    var Width = 640;
    var Height = 600;
    //����ԭ��
    var originX = 40; //ÿ����6 ��6*100�� = 600������40���̶Ⱥ��ı�
    var originY = 480;//Ԫ��ÿ��ֵ4 ��4*120�� = 480
    //����
    var xStep = 6;
    var yStep = 4;
    /////////////////////////////
    // ����������Ϣ��ȡ
    //���յĹ����ṹ��
    var birthDD;
    if( 0 == bzpp.IsUseZTY )//������̫��
    {
        birthDD = JD.DD( bzpp.JDBirth );
    }
    else//����̫��
    {
        birthDD = JD.DD( bzpp.JDBirthZTY );
    }
    //����ʱ��
    var qiyunDD = JD.DD( bzpp.DaYunJD );
    //��������
    var qiyunZhouSui =  qiyunDD.Y - birthDD.Y ;
    //��������ļ���
    var qiyunJiaZiNian =  GetNianJiaZiShu(qiyunDD.Y);
    //����˲�����
    var arrayDaYun = new Array(8);
    for(var k=0; k<8; k++)
    {
        //��ͨ���̵Ĵ���
        if( 0 == bzpp.isNiDaYun ) //�������У�˳����
        {
            arrayDaYun[k] = (bzpp.iYueJZ + k + 1)%60;
        }
        else
        {
            arrayDaYun[k] = (bzpp.iYueJZ - k - 1 + 60)%60;
        }
        //
        //console.log( JiaZi[ arrayDaYun[k] ] );
    }
    ////////////////////////////////////
    //Ԫ���ֵ 10 �� 100�����˶���Ӱ����� +-20 �� +-40
    //����Ӱ��̶�
    var multi = 20 + ((100-aYuanShen.yuanshen)/90.0) * 20;
    //���㱶�� +-5 �Ŵ� +-20��40
    multi = 2 * multi / 10.0;    //���˴����+-5���ƣ��������ʱ���Ա��ʣ��õ�ʵ��Ӱ�����
    //���˻�ͼ
    painter.beginPath();
    painter.strokeStyle = "blue";
    painter.lineWidth = 3;
    //��������Ԫ���ֵ
    var lastYearScore = 150;
    //��ǰ��ݷ�ֵ
    var curYS = 150;
    for(var i=0; i<8; i++) //8������*10��
    {
        //�����ɫ
        painter.fillStyle = DaYunColors[i];
        //��ǰ����
        var curDaYunJZ = arrayDaYun[i];
        //���˶�Ԫ���ֵ��ռ�߳�
        var scoreDaYun = GetSuiYunDanYS(curDaYunJZ, bzpp.iRiJZ) * 0.7;
        
        //����ÿ�������������ͼ
        for(var j=0; j<10; j++)
        {
            lastYearScore = curYS;
            //��ǰ���������
            var curYearJZ = (qiyunJiaZiNian +i*10+j) % 60;            
            //��ǰ����
            var curYearOld = qiyunZhouSui +i*10+j ;
            //��ǰ���˱仯����
            var curChangeScore = GetSuiYunDanYS(curYearJZ, bzpp.iRiJZ)*0.3 + scoreDaYun;
            //��ǰԪ���ֵ
            curYS = aYuanShen.yuanshen + multi * curChangeScore;
            //��������
            curYS = Math.floor( curYS + 0.5 );
            if(curYS > 120 )//����120
            {
                curYS = 120;
            }
            if(curYS < -30)//����-30
            {
                curYS = -30;
            }
            //�жϷ���������
            if( curYS >=0  )
            {
                painter.fillRect( originX + curYearOld*xStep, (120-curYS)*yStep, xStep, curYS*yStep );
            }
            else//Ԫ���Ǹ���
            {
                painter.fillRect( originX + curYearOld*xStep, originY, xStep, -curYS*yStep );
            }

            //���߶� 
            if( (i!=0) || (j!=0) )  //i==0��j==0�����˵�0�꣬����
            {
                painter.moveTo( originX+ curYearOld*xStep - xStep/2, (120-lastYearScore)*yStep );
                painter.lineTo(originX+ curYearOld*xStep + xStep/2, (120-curYS)*yStep );
            }
            //console.log( curYS );
        }//inner for        
    }//outer for
    painter.stroke();

    ///////////////////////////
    //��������Ϳ̶�
    painter.beginPath();
    painter.lineWidth = 3;
    painter.strokeStyle = "black";
    painter.fillStyle = "black";
    painter.moveTo(0, originY);
    painter.lineTo(Width, originY);
    painter.moveTo(1, 0);
    painter.lineTo(1, Height);
    //Y��̶�
    for(var k=0; k<=150; k+=10)//-30�ֵ�120�֣��ܹ�150��
    {
        painter.moveTo(0, k*yStep);
        painter.lineTo(10, k*yStep);
        //������
        painter.fillText( String(120 - k), 14, k*yStep);
    }
    //X��̶�
    for(var k=0; k<=100; k+=10)
    {
        painter.moveTo( originX + k*xStep, originY );
        painter.lineTo( originX + k*xStep, originY + 10 );
        //������
        painter.fillText( String(k), originX + k*xStep, originY + 24 );
    }
    //ͼ��������
    painter.fillText("��������ͼ���������֣�����ִ�ţ�", Width/2 -100, Height - 12);
    //����·��
    painter.stroke();
    ////////////////////////////
    painter.beginPath();
    //Ԫ�����
    painter.strokeStyle = "red";
    var count = Width/xStep;
    for(var k=0; k<count; k++)
    {
        if( 1 == k%2 )
        {
            continue;
        }
        //�������߶�
        painter.moveTo(k*xStep, originY - aYuanShen.yuanshen*yStep);
        painter.lineTo(k*xStep+xStep, originY - aYuanShen.yuanshen*yStep);
    }
    painter.stroke();
    //�߿�
    painter.lineWidth = 1;
    painter.strokeStyle = "green";
    painter.strokeRect(0,0,Width,Height);
}

//���Ӹ߼����˻�ͼ�����������ǰ������̡�Ԫ����󡢻�ͼ��
function DrawGaoJiSuiYun(bzpp, aYuanShen, painter)
{
    //�ߴ�
    var Width = 640;
    var Height = 600;
    //����ԭ��
    var originX = 40;//40+ 100��*6����
    var originY = 480;//���� 120��*4����
    //����
    var xStep = 6;
    var yStep = 4;
    ////////////////////////////////////////////
    //����������Ϣ��ȡ
    //���յĹ����ṹ��
    var birthDD;
    if( 0 == bzpp.IsUseZTY )//������̫��
    {
        birthDD = JD.DD( bzpp.JDBirth );
    }
    else//����̫��
    {
        birthDD = JD.DD( bzpp.JDBirthZTY );
    }
    //���������� 0
    var qiyunZhouSui = 0;
    //�����������
    var qiyunJiaZiNian = GetNianJiaZiShu( birthDD.Y);
    //����˲�����
    var arrayDaYun = new Array(8);
    for(var k=0; k<8; k++) //�������ѭ��
    {
        //�߼����̵Ĵ���
        if( 0 == bzpp.isNiDaYun ) //�������У�˳����
        {
            arrayDaYun[k] = (bzpp.iYueJZ + k%5 + 1)%60;
        }
        else
        {
            arrayDaYun[k] = (bzpp.iYueJZ - k%5 - 1 + 60)%60;
        }
        //console.log( JiaZi[ arrayDaYun[k] ] );
    }
    /////////////////////////////////
    //Ԫ��Խ��������Ӱ��̶�Խ��
    //����Ӱ��̶� 20��40
    var multi = 20 + ((100-aYuanShen.yuanshen)/90.0) * 20;
    //���㱶�� +-5 �Ŵ� +-20��40
    multi = 2 * multi / 10.0;    //���˴����+-5���ƣ��������ʱ���Ա��ʣ��õ�ʵ��Ӱ�����
    //���˻�ͼ
    painter.beginPath();
    painter.strokeStyle = "blue";
    painter.lineWidth = 3;
    //��������Ԫ���ֵ
    var lastYearScore = 150;
    //��ǰ��ݷ�ֵ
    var curYS = 150;
    for(var i=0; i<8; i++)  //8��*12��
    {
        //�����ɫ
        painter.fillStyle = DaYunColors[i];
        //��ǰ���˼�����
        var curDaYunJZ = arrayDaYun[i];
        //���˶�Ԫ����÷֣�ռ�߳�
        var scoreDaYun = GetSuiYunDanYS(curDaYunJZ, bzpp.iRiJZ) * 0.7;
        
        //����ÿ�������������ͼ
        for(var j=0; j<12; j++)
        {
            lastYearScore = curYS;  //����Ԫ���
            //��ǰ���������
            var curYearJZ = (qiyunJiaZiNian +i*12+j) % 60;  
            //��ǰ����
            var curYearOld = qiyunZhouSui +i*12+j ;
            //��ǰ���˱仯����
            var curChangeScore = GetSuiYunDanYS(curYearJZ, bzpp.iRiJZ)*0.3 + scoreDaYun;
            //��ǰԪ���ֵ
            curYS = aYuanShen.yuanshen + multi * curChangeScore;
            //��������
            curYS = Math.floor( curYS + 0.5 );
            if(curYS > 120 )//����120
            {
                curYS = 120;
            }
            if(curYS < -30)//����-30
            {
                curYS = -30;
            }
            //�жϷ���������
            if( curYS >=0  )
            {
                painter.fillRect( originX + curYearOld*xStep, (120-curYS)*yStep, xStep, curYS*yStep );
            }
            else//Ԫ���Ǹ���
            {
                painter.fillRect( originX + curYearOld*xStep, originY, xStep, -curYS*yStep );
            }
            //���߶� 
            if( (i!=0) || (j!=0) )  //i==0��j==0�����˵�0�꣬����
            {
                painter.moveTo( originX+ curYearOld*xStep - xStep/2, (120-lastYearScore)*yStep );
                painter.lineTo(originX+ curYearOld*xStep + xStep/2, (120-curYS)*yStep );
            }
            //console.log( curYS );
        }//inner for 
    }//outer for    
    painter.stroke();
    
    //////////////////////////////////////////////
    //��������Ϳ̶�
    painter.beginPath();
    painter.lineWidth = 3;
    painter.strokeStyle = "black";
    painter.fillStyle = "black";
    painter.moveTo(0, originY);
    painter.lineTo(Width, originY);
    painter.moveTo(1, 0);
    painter.lineTo(1, Height);
    //Y��̶�
    for(var k=0; k<=150; k+=10)//-30�ֵ�120�֣���150��
    {
        painter.moveTo(0, k*yStep);
        painter.lineTo(10, k*yStep);
        //������
        painter.fillText( String(120 - k), 14, k*yStep);
    }
    //X��̶�
    for(var k=0; k<=100; k+=12)
    {
        painter.moveTo( originX + k*xStep, originY );
        painter.lineTo( originX + k*xStep, originY + 10 );
        //������
        painter.fillText( String(k), originX + k*xStep, originY + 24 );
    }
    //ͼ��������
    painter.fillText("��������ͼ���������֣�����ִ�ţ�", Width/2 -100, Height - 12);
    //����·��  
    painter.stroke();
    ////////////////////////////
    painter.beginPath();
    //Ԫ�����
    painter.strokeStyle = "red";
    var count = Width/xStep;
    for(var k=0; k<count; k++)
    {
        if( 1 == k%2 )
        {
            continue;
        }
        //�������߶�
        painter.moveTo(k*xStep, originY - aYuanShen.yuanshen*yStep);
        painter.lineTo(k*xStep+xStep, originY - aYuanShen.yuanshen*yStep);
    }
    painter.stroke();
    //�߿�
    painter.lineWidth = 1;
    painter.strokeStyle = "green";
    painter.strokeRect(0,0,Width,Height);
}

//�������˱���ΪԪ����Ϊ���˻����꣬����ͬ�����ˣ����Ե�ֱ�ӼӲ�ֵ
//��Χ 1�� �� 10��

//���� 1��2
//���� 3��4��������3�֣�ͬ����4��
//�ҿ� 5��6
//ͬ�� 7��8
//���� 9��10

//������˳1λ�ӷ֡�������˳2λ�ӷ֡�����ˮ���������׻����۷�
var NaYinSuiYunBiao  = 
[	    //���н� ¯�л� ����ľ ·���� ����� ɽͷ�� ����ˮ ��ǽ�� ������ ����ľ Ȫ��ˮ ������ ���׻� �ɰ�ľ ����ˮ ɳ�н� ɽ�»� ƽ��ľ ������ �𲭽� ���ƻ� ���ˮ ������ ���˽� ɣ��ľ ��Ϫˮ ɳ���� ���ϻ� ʯ��ľ ��ˮ
/*���н�*/ [7,     2,     6,     9,    7,      1,     4,    9,      7,     5,     4,     9,     1,     5,     4,     7,      1,    5,     9,     7,     1,     4,     9,     7,     7,     4,     9,      1,     5,    4],
/*¯�л�*/ [5,     7,     10,    5,    5,      7,     3,    4,      5,     9,     3,     4,     6,     9,     0,     5,      7,    9,     4,     5,     7,     1,     4,     5,     9,     3,     4,      6,     9,    1],
/*����ľ*/ [2,     4,     7,     6,    1,      4,     9,    5,      1,     7,     9,     5,     3,     7,     9,     1,      4,    7,     5,     1,     4,     9,     5,     0,     7,     9,     5,      3,     7,    9],
/*·����*/ [4,     9,     1,     7,    5,     10,     5,    7,      4,     2,     5,     7,     8,     1,     5,     4,      9,    1,     7,     4,     9,     5,     7,     4,     1,     5,     7,      8,     1,    5],
/*�����*/ [7,     1,     5,     9,    7,      2,     5,    9,      7,     5,     4,     9,     0,     5,     4,     7,      1,    5,     9,     7,     1,     4,     9,     7,     7,     4,     9,      0,     5,    4],
/*ɽͷ��*/ [5,     7,     9,     4,    5,      7,     2,    5,      5,     9,     1,     4,     6,     9,     1,     5,      7,    9,     4,     5,     7,     1,     4,     5,     9,     0,     4,      6,     9,    1],
/*����ˮ*/ [9,     5,     4,     1,    9,      5,     7,    2,      10,    4,     7,     1,     5,     4,     7,     9,      5,    4,     1,     9,     5,     7,     1,     9,     4,     7,     1,      5,     4,    8],
/*��ǽ��*/ [4,     9,     1,     7,    4,      9,     5,    7,      5,     2,     5,     7,     8,     1,     5,     4,      9,    1,     7,     4,     9,     5,     7,     4,     1,     5,     7,      8,     1,    5],
/*������*/ [7,     1,     5,     9,    3,      1,     4,    9,      7,     6,     5,     9,     0,     5,     4,     7,      1,    5,     9,     7,     1,     4,     9,     7,     7,     4,     9,      0,     5,    4],
/*����ľ*/ [2,     4,     7,     5,    1,      4,     9,    5,      1,     7,     10,    6,     3,     7,     9,     1,      4,    7,     5,     0,     4,     9,     5,     1,     7,     9,     5,      3,     7,    9],
/*Ȫ��ˮ*/ [9,     5,     4,     1,    9,      5,     7,    1,      9,     4,     7,     2,     5,     4,     7,     9,      5,    4,     1,     9,     5,     7,     0,     9,     4,     7,     1,      5,     4,    8],
/*������*/ [4,     9,     1,     7,    4,      9,     5,    7,      4,     0,     5,     7,     8,     2,     5,     4,      9,    1,     7,     4,     9,     5,     7,     4,     1,     5,     7,      8,     1,    5],
/*���׻�*/ [5,     7,     9,     4,    5,      7,     1,    4,      5,     9,     1,     4,     7,     10,    2,     5,      7,    9,     4,     5,     7,     0,     4,     5,     9,     1,     4,      7,     9,    1],
/*�ɰ�ľ*/ [2,     4,     7,     5,    0,      4,     9,    5,      1,     7,     9,     5,     3,     7,     10,    2,      4,    7,     5,     1,     4,     9,     5,     1,     7,     9,     5,      3,     7,    9],
/*����ˮ*/ [5,     5,     4,     1,    9,      5,     7,    1,      9,     4,     7,     1,     5,     4,     7,     10,     6,    4,     1,     9,     5,     7,     1,     9,     4,     7,     1,      5,     4,    8],

/*ɳ�н�*/ [7,     1,     5,     9,    3,      1,     4,    9,      7,     5,     4,     9,     0,     5,     4,     7,      2,    6,     9,     7,     1,     4,     9,     7,     7,     4,     9,      0,     5,    4],
/*ɽ�»�*/ [5,     7,     9,     4,    5,      7,     1,    4,      5,     9,     1,     4,     6,     9,     1,     5,      7,    10,    5,     5,     7,     1,     4,     5,     9,     1,     4,      6,     9,    1],
/*ƽ��ľ*/ [2,     4,     7,     5,    1,      4,     9,    5,      1,     7,     9,     5,     3,     7,     9,     1,      4,    7,     6,     2,     4,     9,     5,     1,     7,     9,     5,      3,     7,    9],
/*������*/ [4,     9,     1,     7,    4,      9,     5,    7,      4,     1,     5,     7,     8,     0,     5,     4,      9,    1,     7,     5,     10,    5,     7,     4,     1,     5,     7,      8,     1,    5],
/*�𲭽�*/ [7,     1,     5,     9,    7,      1,     4,    9,      7,     5,     4,     9,     0,     5,     4,     7,      1,    5,     9,     7,     2,     5,     9,     7,     7,     4,     9,      0,     5,    4],
/*���ƻ�*/ [5,     7,     9,     4,    5,      7,     1,    4,      5,     9,     0,     4,     6,     9,     1,     5,      7,    9,     4,     5,     7,     2,     5,     5,     9,     1,     4,      6,     9,    1],
/*���ˮ*/ [9,     5,     4,     1,    9,      5,     7,    1,      9,     4,     7,     1,     5,     4,     7,     9,      5,    4,     1,     9,     5,     7,     0,     10,    4,     7,     1,      5,     4,    8],
/*������*/ [4,     9,     1,     7,    4,      9,     5,    7,      4,     1,     5,     7,     9,     1,     5,     4,      9,    1,     7,     4,     9,     5,     7,     5,     2,     5,     7,      9,     1,    5],
/*���˽�*/ [7,     1,     5,     9,    7,      1,     4,    9,      7,     5,     4,     9,     0,     5,     2,     7,      1,    5,     9,     7,     1,     4,     9,     7,     7,     5,     9,      0,     5,    4],
/*ɣ��ľ*/ [2,     4,     7,     5,    2,      4,     9,    5,      2,     7,     9,     5,     3,     7,     9,     2,      4,    7,     5,     2,     4,     9,     5,     2,     7,     10,    6,      2,     7,    9],
/*��Ϫˮ*/ [9,     5,     4,     1,    9,      5,     7,    1,      9,     4,     7,     0,     5,     4,     7,     9,      5,    4,     1,     9,     5,     7,     1,     9,     4,     7,     2,      5,     4,    8],
/*ɳ����*/ [4,     9,     1,     7,    4,      9,     5,    7,      4,     1,     5,     7,     8,     1,     5,     4,      9,    1,     7,     4,     9,     5,     7,     4,     1,     5,     7,      8,     0,    5],
/*���ϻ�*/ [5,     7,     9,     4,    5,      7,     1,    4,      5,     9,     1,     4,     7,     9,     1,     5,      7,    9,     4,     5,     7,     1,     4,     5,     9,     1,     4,      7,     10,   2],
/*ʯ��ľ*/ [2,     4,     7,     5,    1,      4,     9,    5,      1,     7,     9,     5,     3,     7,     9,     1,      4,    7,     5,     1,     4,     9,     5,     1,     7,     9,     5,      2,     7,   10],
/*��ˮ*/ [10,    6,     4,     1,    9,      5,     8,    1,      9,     4,     8,     1,     5,     4,     8,     9,      5,    4,     1,     9,     1,     7,     1,     9,     4,     8,     1,      5,     4,    7]
];

//��ȡ���˵�����Ԫ��ķ�ֵ����һ�������˼����򣬵ڶ�����Ԫ�������
function GetSuiYunDanYS(syJZ, ysJZ)
{
    //����
    var syNaYin = Math.floor( syJZ/2 );
    var ysNaYin = Math.floor( ysJZ/2 );

   //�Ƿ���ͬ����
   var bTongYinYang = 0;
   if( (syJZ%2) == (ysJZ%2) )
   {
       bTongYinYang = 1;
   };
   //��ֵ��5���ѷ��������� -5 �� +5
   if( 1 == bTongYinYang )   //ͬ������ֱ�ӷ������˱��������
   {
       return NaYinSuiYunBiao[ysNaYin][syNaYin] - 5;    //��ΪԪ����������Ϊ��������
   }
   else
   {
        //����
        var syWX =  NaYinWuXing[syNaYin];
        var ysWX = NaYinWuXing[ysNaYin];
       //����delta
       var delta = 1;   //1��
       if( (ysWX+1)%5 == syWX ) //Ԫ�������ˣ�й�ķ�ֵdelta�� -1
       {
           delta = -1;
       };
       //����
       return NaYinSuiYunBiao[ysNaYin][syNaYin] - 5 + delta;
   }  
   //
}







/*
 
//����������ԭ�溯��
 mingLiBaZi:function(jd,J,ob){ //������ּ��㡣jdΪ��������UT(J2000����),JΪ���ؾ��Ȼ���,���������ob��
  var i, c, v;
  var jd2 = jd+dt_T(jd); //��ѧʱ
  var w = XL.S_aLon( jd2/36525, -1 ); //�˿�̫���ӻƾ�
  var k = int2( (w/pi2*360+45+15*360)/30 ); //1984����������Ľ�����(��������)
  jd += pty_zty2(jd2/36525)+J/Math.PI/2; //������̫��ʱ(ʹ�õ;����㷨����ʱ��)
  ob.bz_zty = JD.timeStr(jd);

  jd += 13/24; //תΪǰһ��23������(ԭjdΪ��������12������)
  var D = Math.floor(jd), SC = int2( (jd-D)*12 ); //������ʱ��

  v = int2(k/12+6000000);  ob.bz_jn = this.Gan[v%10]+this.Zhi[v%12];
  v = k+2+60000000;        ob.bz_jy = this.Gan[v%10]+this.Zhi[v%12];
  v = D - 6 + 9000000;     ob.bz_jr = this.Gan[v%10]+this.Zhi[v%12];
  v = (D-1)*12+90000000+SC;ob.bz_js = this.Gan[v%10]+this.Zhi[v%12];

  v-= SC, ob.bz_JS = ''; //ȫ���ʱ��
  for(i=0; i<13; i++){ //һ���а�����13����ʱ
    c = this.Gan[(v+i)%10]+this.Zhi[(v+i)%12]; //��ʱ���İ���
    if(SC==i) ob.bz_js=c, c = '<font color=red>'+c+'</font>'; //��ɫ��ʾ��ʱ��
    ob.bz_JS += (i?' ':'') + c;
  }
 },


 */
//�����������ջ���ת��ʹ�� ȫ�ֵ� JD �༴�ɣ��μ� eph0.js �ж��塣

//
//�����дũ���������ջ�ת
//������תũ���㷨������ lunar.js �е� �ն��� ob
function GetJDtoNongLiOB(curJD)
{
    //������������
    var glYueLi = new Lunar();
    //��ȡ����������
    var MyJD = JD;
    var rGongLi =  MyJD.DD(curJD);
    //���㹫����������Ϣ
    glYueLi.yueLiCalc( rGongLi.Y, rGongLi.M);
    //gGLYueLi ��ౣ��31�죬�����ҵ� curJD ��һ��Ķ��󷵻ؼ��ɡ�
    var theOB =  glYueLi.lun[ rGongLi.D - 1 ] ;    //������Ŵ�0��ʼ��
    return theOB;
}

//�������ƣ����հ�����������������ʼ
var JieQiMing = new Array(
'����','��ˮ',
'����','����',
'����','����',
'����','С��',
'â��','����',
'С��','����',
'����','����',
'��¶','���',
'��¶','˪��',
'����','Сѩ',
'��ѩ','����',
'С��','��',
'����');
//���ݹ�����ݷ���24������������ÿ��������ʼ�����ǰ����������ŷ�
//��25��������������������������������ʱ��
function GetJieQiArray(y)
{
    var arrayJQ = new Array(25);
    SSQ.calcY( int2((y-2000)*365.2422+180) );
    //SSQ.ZQ[] ������ǴӶ�����ʼ�����н�����������ȡ������ʼ��Ԫ��
    //ʱ��Ҫ���� J2000
    //�������0��С��1����2������3��....��24���Ƕ���
    var i;
    //SSQ.ZQ[i] ��ȡ���Ľ������ӣ��������ӵ�12����
    for(i=3; i<24; i++)//��������ѩ��21��
    {
        //obb.qi_accurate2(?) ���㾫ȷ�Ľ���ʱ��
        arrayJQ[i-3] = obb.qi_accurate2(SSQ.ZQ[i]) + J2000;
    }
    //������һ��Ľ�������ȡ���������� 4 ��
    SSQ.calcY( int2((y+1-2000)*365.2422+180) );
    //SSQ.ZQ[] ������ǴӶ�����ʼ�����н���
    //�������0��С��1����2������3
    for(i=0; i<4; i++)
    {
        //obb.qi_accurate2(?) ���㾫ȷ�Ľ���ʱ��
        arrayJQ[21+i] =  obb.qi_accurate2(SSQ.ZQ[i]) + J2000;
    }
    /*
    //����
    for(var j=0; j<25; j++)
    {
        //console.log( JieQiMing[j%24] + ": " + JD.JD2str( arrayJQ[j] ) );
    }
    */
    //����   
    return arrayJQ;
};

//��ȡĳ���ũ���±��洢13���£�ƽ��12���£�����13����
//nongliYB ���󣬰�������
//nongliYB.arrayJDS[13]��ÿ���µ��������ڣ������� 0 �㿪ʼ
//nongliYB.arrayNames[13]��13���µ����ƣ�����������������Ϊ ���塢����֮���
//nongliYB.arrayDaysCount[13]��ÿ���µ�����������30��С��29
//nongliYB.iRunYue�����µ���ţ���Ŵ�0��ʼ��������Ǹ�����˵������������
//nongliYB.yueCount ������ũ����������ƽ��12��������13��
function GetNongLiYueBiao(y)   //������������ݣ���2008
{
    var nongliYB = new Object();
    //�½�����
    nongliYB.arrayJDS = new Array(13);  //����ʱ�䣬-1 ����ʱ��ʼ
    nongliYB.arrayNames = new Array(13);
    nongliYB.arrayDaysCount = new Array(13);
    //������š���ǰũ���¼���
    nongliYB.iRunYue = -1;
    nongliYB.yueCount = 0;
    
    //���㣬�Ӷ�����ʼ��ũ��ʮһ��
    SSQ.calcY( int2((y-2000)*365.2422+180) );
    //������µ����
    var ixZhengYue = 0;
    for(var i=0;i<14;i++)
    {
       if(SSQ.HS[i+1]>SSQ.ZQ[24]) break; //�Ѱ�����һ��Ķ���
       if( "��" == SSQ.ym[i])
       {
           ixZhengYue = i;
           break;
       }
    }
    //console.log(ixZhengYue);
    var s1 = "";    //�����ַ���
    for(var i=ixZhengYue; i<14; i++)
    {
        if(SSQ.HS[i+1]>SSQ.ZQ[24]) break; //�Ѱ�����һ��Ķ���
        if(SSQ.leap && i==SSQ.leap)     //���´���
        {
            s1='��';
            nongliYB.iRunYue = i - ixZhengYue;//���Ǽ�1֮ǰ�� nongliYB.yueCount
        }
        else
        { 
            s1='';
        }
        s1 += SSQ.ym[i]; 
        nongliYB.arrayNames[ nongliYB.yueCount ] = s1; //������������
        nongliYB.arrayDaysCount[ nongliYB.yueCount ] = SSQ.dx[i]; //��С������
        //�洢�����գ���˷���� SSQ.HS[i] ������12��ģ�ת���� 0 ��
        nongliYB.arrayJDS[ nongliYB.yueCount ] = (SSQ.HS[i]+J2000) - 0.5;
        //��������
        nongliYB.yueCount += 1;
    }
    
    //������һ��ģ�Ȼ����ȡʮһ�¡�ʮ���£�ֱ����������ֹͣ
    SSQ.calcY( int2((y+1-2000)*365.2422+180) );
    var ixEnd = 0;  //��һ�����µ����
    for(var i=0;i<14;i++)
    {
       if(SSQ.HS[i+1]>SSQ.ZQ[24]) break; //�Ѱ�����һ��Ķ���
       if( "��" == SSQ.ym[i])
       {
           ixEnd = i;
           break;
       }
    }
    //��ȡ��β�ļ����·�
    for(var i=0; i<ixEnd; i++)//��ȡ��������֮ǰ��ũ����
    {
        if(SSQ.HS[i+1]>SSQ.ZQ[24]) break; //�Ѱ�����һ��Ķ���
        //�ж�����
        if(SSQ.leap && i==SSQ.leap) 
        {
            s1='��';
            nongliYB.iRunYue = nongliYB.yueCount;//yueCount �ڼ�1֮ǰ�����
        } 
        else 
        {
            s1='';
        }
        s1 += SSQ.ym[i]; 
        nongliYB.arrayNames[ nongliYB.yueCount ] = s1; //������������
        nongliYB.arrayDaysCount[ nongliYB.yueCount ] = SSQ.dx[i]; //��С������
        //�洢�����գ���˷���� SSQ.HS[i] ������12��ģ�ת���� 0 ��
        nongliYB.arrayJDS[ nongliYB.yueCount ] = (SSQ.HS[i]+J2000) - 0.5 ;
        //��������
        nongliYB.yueCount += 1;
    }
    
    //����
    return nongliYB;
}
//����ũ���±��ũ�����ӷ���������
//�����Ǹ���ũ���±�ũ������š�ũ������ţ�Сʱ�����ӡ�����
//Сʱ���� -1 �� 22
function NongLiDayToJD(nongliYB, ixYue, ixRi, hh, mm, ss)
{
    var jdDay = nongliYB.arrayJDS[ ixYue ]     //������ʼ����
        + ixRi                 //��������
        + hh / 24.0           //Сʱ
        + mm / (60*24.0)      //����
        + ss / (60*60*24.0) ; //��
    return jdDay;   //����������
}

////////////////////////////////////////////////////////////
//������ʼ��ݺ�����������60�������ӣ�ftStartYear�����Ǽ�����
function GetFanTuiJD(ftStartYear, jzYear, ixMonth, jzDay, ixHour)
{
    //���㵱ǰ���
    var curYear = ftStartYear + jzYear;
    //��ȡ��������б���������������������25������
    var arrayJQ =  GetJieQiArray(curYear);
    //�·ݾ��� ixMonth��������Χ�� ixMonth*2 �� ixMonth*2 + 2
    var nStartDay = Math.floor(arrayJQ[ixMonth*2] + 0.5);   //ת�����������գ������յ�����12��
    var nEndDay = Math.floor(arrayJQ[ixMonth*2 + 2] + 0.5); //����������
    //������ʼ���������Ӽ������
    var jzStartDay = (nStartDay -J2000 - 6 + 9000000)%60;
    //���Ҹ������� jzDay ����
    var theIndex = -1;
    var dCount = nEndDay - nStartDay;
    for(var i=0; i<=dCount; i++)
    {
        var curJiaZi = (jzStartDay+i) % 60;
        if( curJiaZi ==  jzDay)
        {
            theIndex = i;
            break;  //�ҵ���
        }
    }
    //�ж�
    if( theIndex < 0 )
    {
        return -1;  //û�ҵ�
    }
    //�ٶ��ҵ���
    //����ð����ڽ������죬�·ݿ��ܶԣ�Ҳ���ܴ����ܶԴ������ҵ���
    var jdRet = (nStartDay - 0.5) + theIndex + (ixHour+ (1.0/3600)) * 2 / 24 ;  //����ż��Сʱ�ĵ��죬����2�룬���⸡��������һ����
    return jdRet;
}


