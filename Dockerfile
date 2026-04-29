# 使用高性能 Nginx 作为生产基座
FROM nginx:alpine

# 复制自定义配置实现安全与加速
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 将落地页核心资产移至服务目录
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY README.md /usr/share/nginx/html/

# 暴露 HTTP 标准端口
EXPOSE 80

# 启动服务
CMD ["nginx", "-g", "daemon off;"]
