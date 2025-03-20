// data.js
const qaData = {
  // 基础问候类问题
  greeting: {
    patterns: ["你好", "您好", "早上好", "下午好", "晚上好", "嗨", "哈喽"],
    responses: [
      {
        text: "您好！我是集团智能助手小智，很高兴为您服务。请问有什么可以帮助您？",
        followUp: ["我想了解合同流程", "如何申请报销", "公司规章制度在哪里查询"]
      },
      {
        text: "您好！我是集团法务智能助手，有关于合同、法律法规、公司制度等问题都可以咨询我。",
        followUp: ["合同审批流程", "常见法律风险", "公司制度汇编"]
      }
    ],
    priority: "high"
  },
  
  // 合同类问题
  contract: {
    // 模板合同相关问题
    template: {
      patterns: [
        "模本合同要怎么报审", 
        "模板合同审批流程", 
        "合同模板如何申请", 
        "标准合同审批"
      ],
      responses: [
        {
          text: "关于模板合同的报审流程，根据不同情况有以下处理方式：\n\n**1. 集团模板合同**\n- 登录OA系统\n- 选择「法律合规部-模本合同审批流程」\n- 填写合同基本信息并上传合同文件\n- 选择审批部门负责人进行审批\n\n**2. 分公司模板合同**\n- 由分公司法务部门初审\n- 通过后提交集团法务部审核\n- 审核通过后方可使用\n\n注意：模板合同一经审批通过，使用时不得擅自修改核心条款，否则需重新提交审批。",
          attachments: ["模板合同审批流程图.pdf", "模板合同常见问题解答.doc"],
          tags: ["合同", "模板", "审批"]
        },
        {
          text: "模板合同报审需在OA系统中选择「法律合规部-模本合同审批流程」，完成表单填写并上传合同文本，系统将自动分发至相关部门审批。一般审批周期为3-5个工作日，特殊情况可能需要更长时间。",
          conditions: { urgency: "normal" }
        },
        {
          text: "您好，模板合同加急审批请按以下步骤操作：\n1. OA系统选择「法律合规部-模本合同加急审批」\n2. 填写加急理由\n3. 获得部门负责人特批\n4. 法务部将在24小时内完成审核\n\n注意：加急审批每月每部门限额3次，请合理安排。",
          conditions: { urgency: "high" }
        }
      ],
      relatedQuestions: ["合同变更如何处理", "模板合同使用范围", "常见合同风险点"]
    },
    
    // 非模板合同相关问题
    nonTemplate: {
      patterns: [
        "非模板合同审批", 
        "自拟合同如何审批", 
        "对方合同怎么走审批", 
        "非标准合同审核"
      ],
      responses: [
        {
          text: "非模板合同（包括对方提供的合同或自行拟定的非标准合同）审批流程如下：\n\n**第一步：初审准备**\n- 填写《合同审核申请表》\n- 准备合同文本电子版\n- 相关背景材料（如有）\n\n**第二步：业务部门初审**\n- 部门负责人审核合同商务条款\n- 评估合同对业务影响\n\n**第三步：法务部门审核**\n- 法律风险评估\n- 合规性审查\n- 提出修改建议\n\n**第四步：财务部门审核**\n- 财务条款审核\n- 税务合规性检查\n\n**第五步：分管领导或总经理审批**\n\n注意：金额超过500万的合同需上报董事会审批。",
          tags: ["合同", "非标准", "审批", "法务"],
          priority: "medium"
        }
      ],
      relatedQuestions: ["合同变更流程", "合同订立注意事项", "如何评估合同风险"]
    },
    
    // 合同纠纷处理
    dispute: {
      patterns: [
        "合同纠纷怎么处理", 
        "对方违约了怎么办", 
        "合同对方不履约", 
        "合同争议解决"
      ],
      responses: [
        {
          text: "合同纠纷处理建议按以下步骤进行：\n\n**1. 证据收集**\n- 整理合同文本及附件\n- 收集往来邮件、会议纪要等通信记录\n- 付款凭证、交货证明等履约证据\n- 对方违约的证据材料\n\n**2. 内部评估**\n- 向法务部提交《合同纠纷处理申请表》\n- 法务评估违约情况及风险\n- 制定处理方案\n\n**3. 协商沟通**\n- 由法务部牵头与对方沟通\n- 尝试和解方案\n\n**4. 争议解决**\n- 按合同约定选择调解、仲裁或诉讼\n- 必要时聘请外部律师\n\n具体处理方案会根据合同金额、纠纷性质等有所调整，建议及时咨询法务部获取针对性建议。",
          attachments: ["合同纠纷处理指引.pdf"],
          tags: ["合同", "纠纷", "违约", "诉讼"]
        }
      ],
      priority: "high"
    }
  },
  
  // 财务类问题
  finance: {
    // 报销流程
    reimbursement: {
      patterns: [
        "如何申请报销", 
        "差旅费报销流程", 
        "费用报销怎么操作", 
        "电子发票报销"
      ],
      responses: [
        {
          text: "费用报销流程如下：\n\n**1. 报销申请**\n- 登录企业ERP系统-财务模块\n- 选择对应报销类型（差旅、办公、业务招待等）\n- 填写费用明细并上传发票照片\n- 关联对应项目或部门预算\n\n**2. 审批流程**\n- 直属上级审批\n- 部门负责人审批\n- 财务审核\n- 金额超过1万元需分管领导审批\n\n**3. 报销到账**\n- 审批通过后3个工作日内打款至员工银行卡\n\n**重要提醒**：\n- 发票抬头必须为公司全称\n- 费用发生后30天内须完成报销\n- 差旅费需附出差审批单\n- 业务招待费需附客户信息及招待事由",
          tags: ["财务", "报销", "费用"]
        }
      ],
      relatedQuestions: ["预算申请流程", "发票管理规定", "差旅标准是什么"]
    }
  },
  
  // 人事行政类问题
  hr: {
    // 请假流程
    leave: {
      patterns: [
        "如何请假", 
        "年假怎么申请", 
        "病假需要什么材料", 
        "请假流程"
      ],
      responses: [
        {
          text: "请假申请流程及注意事项：\n\n**请假类型及规定**\n- **年假**：工作满1年可享受，根据工作年限确定天数\n- **事假**：无薪休假，每年累计不超过15天\n- **病假**：需提供医院证明，连续超过3天需提供诊断证明\n- **婚假**：初婚可享受3天婚假，晚婚可增加至7天\n- **产假**：女员工98天，难产可增加至113天\n- **陪产假**：男员工可享受15天\n\n**申请流程**\n1. 登录OA系统-人事模块-请假申请\n2. 选择请假类型并填写起止时间\n3. 上传相关证明材料（如需）\n4. 提交至直属上级审批\n5. 审批通过后HR部门备案\n\n**注意事项**\n- 请假前应合理安排工作交接\n- 年假请提前3天申请\n- 事假请提前2天申请\n- 特殊情况可先口头请假，后补办手续",
          tags: ["人事", "请假", "休假"]
        }
      ]
    }
  },
  
  // 默认回复
  default: {
    responses: [
      {
        text: "抱歉，我暂时无法回答这个问题。您可以：\n\n1. 尝试使用其他关键词重新提问\n2. 咨询相关部门负责人\n3. 拨打企业服务热线400-888-9999\n\n您也可以告诉我您想了解的大致方向，我可以推荐相关问题。",
        followUp: ["常见问题目录", "联系客服", "反馈问题"]
      }
    ],
    priority: "low"
  },
  
  // 处理函数
  processQuery: function(query, context = {}) {
    // 查找匹配的问题类别和具体问题
    for (const category in this) {
      if (typeof this[category] === 'object' && this[category] !== null) {
        // 检查是否为顶级类别且包含patterns
        if (this[category].patterns && this.matchPatterns(query, this[category].patterns)) {
          return this.getResponse(this[category].responses, context);
        }
        
        // 检查子类别
        for (const subCategory in this[category]) {
          if (typeof this[category][subCategory] === 'object' && 
              this[category][subCategory] !== null &&
              this[category][subCategory].patterns) {
            if (this.matchPatterns(query, this[category][subCategory].patterns)) {
              return this.getResponse(this[category][subCategory].responses, context);
            }
          }
        }
      }
    }
    
    // 没有找到匹配的问题，返回默认回复
    return this.getResponse(this.default.responses, context);
  },
  
  // 匹配模式
  matchPatterns: function(query, patterns) {
    // 简单关键词匹配算法
    for (const pattern of patterns) {
      // 对整句完全匹配的情况
      if (query === pattern) {
        return true;
      }
      
      // 关键词匹配 - 将来可以增强为NLP或正则表达式匹配
      const keywords = pattern.split(/\s+/);
      let matchCount = 0;
      for (const keyword of keywords) {
        if (keyword.length > 1 && query.includes(keyword)) {
          matchCount++;
        }
      }
      
      // 如果匹配了超过70%的关键词，认为是匹配的
      if (keywords.length > 0 && matchCount / keywords.length >= 0.7) {
        return true;
      }
    }
    return false;
  },
  
  // 获取回复
  getResponse: function(responses, context) {
    if (!responses || responses.length === 0) {
      return this.getResponse(this.default.responses, context);
    }
    
    // 首先检查是否有匹配条件的回复
    const conditionalResponses = responses.filter(r => 
      r.conditions && Object.keys(r.conditions).every(key => 
        context[key] === r.conditions[key]
      )
    );
    
    if (conditionalResponses.length > 0) {
      return conditionalResponses[Math.floor(Math.random() * conditionalResponses.length)];
    }
    
    // 没有匹配条件的回复，返回任意一个没有条件的回复
    const unconditionalResponses = responses.filter(r => !r.conditions);
    if (unconditionalResponses.length > 0) {
      return unconditionalResponses[Math.floor(Math.random() * unconditionalResponses.length)];
    }
    
    // 如果都没有，返回第一个回复
    return responses[0];
  }
};

// 使用示例
/*
// 简单查询
const answer = qaData.processQuery("模本合同要怎么报审");
console.log(answer.text);

// 带上下文的查询
const urgentAnswer = qaData.processQuery("模板合同审批流程", { urgency: "high" });
console.log(urgentAnswer.text);
*/

export default qaData;
