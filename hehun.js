//������������ʱ��� 1583 �� �� 3199 �꣬�������������һ�굽3200ǰһ�꣬3200���Ƿ�Ϊ���������
//ȫ�ֱ���������ʼʱ��ͽ���ʱ���һ�¾Ϳ��Ը������̵���ݷ�Χ������Ϊ�����240��ʱ��Ρ�
var gStartYear = 1924;
var gEndYear = 2164;
//��ͼ�ؼ�
var syCanvas = document.getElementById("syCanvas");
//�з�������ʱ��
var nanYear = document.getElementById("nanYear");
var nanMonth = document.getElementById("nanMonth");
var nanDay = document.getElementById("nanDay");
var nanHour = document.getElementById("nanHour");
var nanMinute = document.getElementById("nanMinute");
//Ů��������ʱ��
var nvYear = document.getElementById("nvYear");
var nvMonth = document.getElementById("nvMonth");
var nvDay = document.getElementById("nvDay");
var nvHour = document.getElementById("nvHour");
var nvMinute = document.getElementById("nvMinute");

/**************************************************/
//�����ؼ��ĳ�ʼ���Ͷ�̬����
function InitYears()    //��ʼ��ʱһ���Ե���
{
    //��վɵ�
    nanYear.length = 0;  
    nvYear.length = 0;
    var curOpNan;
    var curOpNv;
    for(var i=gStartYear; i<=gEndYear; i++)
    {
        //�з�
        curOpNan = document.createElement('option');
        curOpNan.value = i;
        curOpNan.text = String(i);
        nanYear.add(curOpNan, null);
        //Ů��
        curOpNv = document.createElement('option');
        curOpNv.value = i;
        curOpNv.text = String(i);
        nvYear.add(curOpNv, null);
    }
    //Ĭ��ѡ��2000��
    nanYear.selectedIndex = 2000 - gStartYear;
    nvYear.selectedIndex = 2000 - gStartYear;
}
//��ʼ��2000��1�·�
function InitDays() //��ʼ��ʱһ���Ե���
{
    //��վɵ�һ��ѡ��
    nanDay.length = 0;
    nvDay.length = 0;
    var curOpNan;
    var curOpNv;
    //��ӣ�2000��1��
    var nCount = 31;
    for(var i=1; i<=nCount; i++)
    {
        curOpNan = document.createElement('option');
        curOpNan.value = i;
        curOpNan.text = String(i);
        nanDay.add(curOpNan, null);
        //Ů
        curOpNv = document.createElement('option');
        curOpNv.value = i;
        curOpNv.text = String(i);
        nvDay.add(curOpNv, null);
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
function OnNanYearChanged()
{
    //��ݱ仯ֻӰ��2��
    var curYear = nanYear.value;
    var curMonth = nanMonth.value;
    if(curMonth != 2)
    {
        return; //����2��
    }
    //��2��
    var oldDaysCount = nanDay.length;
    var newDaysCount = GetGLDaysCountByYearAndMonth(curYear, curMonth);
    if( oldDaysCount == newDaysCount )
    {
        //�ɵ��������µ�����û�䣬����Ҫ�Ķ�
        return;
    }
    //�����б仯
    if( oldDaysCount > newDaysCount )//�ɵ���29�죬�µ���28��
    {
        nanDay.remove(29 - 1);    //�Ƴ�ĩβ��29��
    }
    else//�ɵ�28�죬�µ�29��
    {
        var curOp = document.createElement('option');
        curOp.value = 29;
        curOp.text = "29";
        nanDay.add(curOp, null);
    }
}
//�����·ݱ仯�������Ƿ��������
function OnNanMonthChanged()
{
    var curYear = nanYear.value;
    var curMonth = nanMonth.value;
    //����������������
    //�ɵ�������ȫ���Ƴ���
    var oldCount = nanDay.length;
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
            nanDay.remove( i-1 );
        }
    }
    else
    {
        //���˲���
        for(var i=oldCount+1; i<=newCount; i++)
        {
            var curOp = document.createElement('option');
            curOp.value = i;
            curOp.text = String(i);
            nanDay.add(curOp, null);
        }
    }
}

//������ݱ仯�������Ƿ��������
function OnNvYearChanged()
{
    //��ݱ仯ֻӰ��2��
    var curYear = nvYear.value;
    var curMonth = nvMonth.value;
    if(curMonth != 2)
    {
        return; //����2��
    }
    //��2��
    var oldDaysCount = nvDay.length;
    var newDaysCount = GetGLDaysCountByYearAndMonth(curYear, curMonth);
    if( oldDaysCount == newDaysCount )
    {
        //�ɵ��������µ�����û�䣬����Ҫ�Ķ�
        return;
    }
    //�����б仯
    if( oldDaysCount > newDaysCount )//�ɵ���29�죬�µ���28��
    {
        nvDay.remove(29 - 1);    //�Ƴ�ĩβ��29��
    }
    else//�ɵ�28�죬�µ�29��
    {
        var curOp = document.createElement('option');
        curOp.value = 29;
        curOp.text = "29";
        nvDay.add(curOp, null);
    }
}
//�����·ݱ仯�������Ƿ��������
function OnNvMonthChanged()
{
    var curYear = nvYear.value;
    var curMonth = nvMonth.value;
    //����������������
    //�ɵ�������ȫ���Ƴ���
    var oldCount = nvDay.length;
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
            nvDay.remove( i-1 );
        }
    }
    else
    {
        //���˲���
        for(var i=oldCount+1; i<=newCount; i++)
        {
            var curOp = document.createElement('option');
            curOp.value = i;
            curOp.text = String(i);
            nvDay.add(curOp, null);
        }
    }
}

/////////////////////////////////////////////////////////////////////
//���������ı�
var AllText = document.getElementById("AllText");
//����ϻ�����
function CalcHeHunPanPai()
{
    //��ȡ�з�������Ϣ
    var myJD = JD;
    myJD.Y = Number(nanYear.value);
    myJD.M = Number(nanMonth.value);
    myJD.D = Number(nanDay.value);
    myJD.h = Number(nanHour.value);
    myJD.m = Number(nanMinute.value);
    myJD.s = 30;  //Ĭ����30�������
    //��������������
    var birthNan = myJD.toJD();
    //��ȡŮ��������Ϣ
    myJD.Y = Number(nvYear.value);
    myJD.M = Number(nvMonth.value);
    myJD.D = Number(nvDay.value);
    myJD.h = Number(nvHour.value);
    myJD.m = Number(nvMinute.value);
    myJD.s = 30;  //Ĭ��30��
    var birthNv = myJD.toJD();

    //ͨ�����̺����������ǳ�������ͨʱ�������ա��Ա𡢳����ؾ��ȡ��Ƿ���̫��
    //���� bzpp ����
    var bzppNan =  CalcBaZiObject(birthNan, "��", 120, 0);//��������
    var bzppNv = CalcBaZiObject(birthNv, "Ů", 120, 0);//Ů������
    //
    //�ж��Ƿ���Ҫ��ͼ
    var bDraw = Number( document.getElementById("sDrawPic").value );
    //console.log(syCanvas); 
    //���ֺϻ�
    AllText.innerHTML = GetHeHunHTML(bzppNan, bzppNv
            , bDraw, syCanvas); //������������ʾ �Ƿ��ͼ
            
    //�������ƺϻ�ͼ��˵��
    
    if( 1 == bDraw  )//��ͼʱ����ʾ˵��
    {
        //˵�������ֶζ���
        var shuoming = document.getElementById("YunShiHeHunShuoMing");
        shuoming.innerHTML = "����ƥ��ͼ˵����<br>" +
            "����ɫ���ߴ����������ƣ��Ϻ�ɫ���ߴ���Ů�����ƣ�ƥ��ʱ����Ǵ�����С����λ20����㵽80�ꡣ<br>" +
            "����ɫ������Эͬ���֣�����ɫ�����ǲ��첿�֣���ɫ����ȷۺ���������Խ�󣬴�������ƥ��Խ�á�<br>" +
            "����ֱ�����Ƿ�ֵ�̶ȣ���ֵ�ߵ�����������ֵ�͵����Ʋ������ַ�ֵ����0�֣���ע��������֡�" ;
    };

    //ִ���Զ����Ƶ������壬IE9��Chrome֧�֣�������Բ��С�
    document.execCommand("selectAll");  //ȫѡ
    document.execCommand("copy");       //����
    document.execCommand("unselect");   //��ѡ�� 
}

