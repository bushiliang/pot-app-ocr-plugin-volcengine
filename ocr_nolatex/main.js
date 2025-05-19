async function recognize(base64, lang, options) {
  const { config, utils } = options;
  const { tauriFetch: fetch } = utils;
  let { model = "doubao-1.5-vision-lite-250315", apiKey, customPrompt } = config;

  // 强制指定火山方舟API路径
  const requestPath = "https://ark.cn-beijing.volces.com/api/v3/chat/completions";

  if (!customPrompt) {
    customPrompt = "仅识别图片中的文字，不要添加额外解释。";
  } else {
    customPrompt = customPrompt.replaceAll("$lang", lang);
  }

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  };

  const body = {
    model,
    messages: [
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": customPrompt
          },
          {
            "type": "image_url",
            "image_url": {
              "url": `data:image/png;base64,${base64}`,
              "detail": "high"
            }
          }
        ]
      }
    ]
  };

  let res = await fetch(requestPath, {
    method: 'POST',
    headers: headers,
    body: {
      type: "Json",
      payload: body
    }
  });

  if (res.ok) {
    return res.data.choices[0].message.content;
  } else {
    const errorMsg = res.data.error ? res.data.error.message : JSON.stringify(res.data);
    throw `请求失败\n状态码: ${res.status}\n错误详情: ${errorMsg}`;
  }
}
