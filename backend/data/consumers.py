from channels.generic.websocket import AsyncWebsocketConsumer
import json
from datetime import datetime
import asyncio
import random

class NotificationConsumer(AsyncWebsocketConsumer):
    async def connect(self):
            await self.accept()
            print("Client connected")
            while True:
                data = {
                    "message": f"Dữ liệu mẫu lúc {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}",
                    "value": random.uniform(0, 100)
                }
                await self.send(json.dumps(data))
                print(f"Sent data: {data}")
                await asyncio.sleep(3)

    async def disconnect(self, close_code):
        print("Client disconnected")

    async def websocket_receive(self, text_data):
        pass
